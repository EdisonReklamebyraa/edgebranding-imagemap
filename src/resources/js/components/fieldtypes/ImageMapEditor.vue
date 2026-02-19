<template>
    <div>
        <div class="flex flex-wrap gap-1">
            <publish-field-meta
                :config="{ type: 'assets' }"
                :initial-value="value.images"
                :initial-meta="{ container: config.container }"
                class="w-1/2 mr-2 assets-fieldtype"
            >
                <div slot-scope="{ meta, value, loading }">
                    <label class="publish-field-label mb-1"><span class="cursor-pointer">Image</span></label>
                    <assets-fieldtype
                        v-if="!loading"
                        :config="{
                            container: config.container,
                            mode: 'grid',
                            allow_uploads: true,
                            type: 'assets',
                            display: 'assets',
                            component: 'assets',
                            handle: 'assets',
                        }"
                        :value="value"
                        :meta="meta"
                        handle="asset"
                        ref="asset"
                        @input="onImageUploaded"
                    />
                </div>
            </publish-field-meta>

            <publish-field-meta
                :config="{
                    handle: 'collections',
                    type: 'entries',
                    collections: config.collections,
                    mode: 'tags',
                }"
                :initial-value="value.entries"
                class="w-1/2 flex-1"
            >
                <div slot-scope="{ meta, value, loading }">
                    <label class="publish-field-label mb-1"
                        ><span class="cursor-pointer" v-html="__('Buildings')"></span
                    ></label>
                    <relationship-fieldtype
                        v-if="!loading"
                        :config="{
                            handle: 'collections',
                            type: 'entries',
                            collections: config.collections,
                            mode: 'tags',
                        }"
                        :value="value"
                        :meta="meta"
                        handle="entry"
                        ref="entry"
                        @input="onEntriesUpdated"
                        @meta-updated="
                            meta.data = $event.data;
                            entryMeta = $event.data;
                        "
                    />
                </div>
            </publish-field-meta>
        </div>
        <div v-if="!loading" class="imagemapeditor mx-auto w-full mt-4">
            <label class="publish-field-label mb-1"><span class="cursor-pointer" v-html="__('Editor')"></span></label>
            <div class="flex">
                <div class="flex-initial control mb-1 mr-1 field select-input">
                    <button
                        class="btn"
                        :class="zoom ? 'btn-primary' : ''"
                        @click="activateZoomMode()"
                        v-html="__('Forstørr område')"
                    ></button>
                </div>
                <v-select
                    class="w-full mr-1"
                    :options="
                        images
                            .map((image) => {
                                if (image === undefined) {
                                    return null;
                                }

                                return {
                                    value: image.id,
                                    label: image.values.alt || image.filename,
                                };
                            })
                            .filter((e) => e !== null)
                    "
                    :reduce="(selection) => selection.value"
                    :clearable="false"
                    v-model="selectedImage"
                />
                <v-select
                    class="w-full"
                    :options="
                        [{ value: 'showAll', label: __('Velg eiendom / vis alle') }].concat(
                            entriesWithMeta
                                .map((entry) => {
                                    if (entry === undefined) {
                                        return null;
                                    }

                                    return {
                                        value: entry.id,
                                        label: entry.title,
                                    };
                                })
                                .filter((e) => e !== null)
                        )
                    "
                    :reduce="(selection) => selection.value"
                    :clearable="false"
                    v-model="selectedDropdown"
                />
            </div>
            <div id="editor">
                <svg-edit
                    @polygon-updated="updatePolygon"
                    @zoom-updated="updateZoom"
                    v-bind:selected.sync="selectedDropdown"
                    v-if="polygons.length && images.length > 0"
                    :polygons="polygons"
                    :zoom-enabled="zoom"
                    :images="images"
                    :selected-image="selectedImage"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mixins: [Fieldtype],

    data() {
        return {
            zoom: false,
            selectedDropdown: 'showAll',
            entryMeta: [],
            loading: false,
            polygons: [],
            images: [],
            selectedImage: null,
        };
    },

    computed: {
        entriesWithMeta() {
            return this.value.entries.map((entryId) => this.entryMeta.find((e) => e.id === entryId));
        },
    },

    methods: {
        onImageUploaded(data) {
            this.update({
                ...this.value,
                images: data
            });

            let images = [];
            const self = this;
            Promise.all(data.map(image => self.getImage(image))).then(responses => {
                responses.forEach(response => {
                    images.push(response[0]);
                });

                self.images = images;
                self.selectedImage = images[0].id;
                self.updatePolygonList();
            });
        },

        onEntriesUpdated(data) {
            this.update({
                ...this.value,
                entries: data,
            });

            this.$nextTick(() => {
                this.updatePolygonList();
            });
        },

        getImage(assets) {
            return this.$axios
                .post(cp_url('assets-fieldtype'), {
                    assets,
                })
                .then((response) => {
                    return response.data;
                });
        },
        activateZoomMode() {
            this.zoom = !this.zoom;
        },
        updatePolygonList() {
            if (!this.value.entries) {
                this.value.entries = [];
                return;
            }

            const items = this.value.entries.flatMap((entryId) => {
                const entry = this.entriesWithMeta.find((entry) => entry.id === entryId);

                return this.value.images.map((assetId) => {
                    const existingItem = this.value.items.find((item) => item.entryId === entryId && item.assetId === assetId);

                    if (existingItem) {
                        return existingItem;
                    }

                    return {
                        entryId: entryId,
                        assetId: assetId,
                        label: entry.title,
                        polygon: '',
                    };
                });
            });

            this.update({
                ...this.value,
                items: items,
            });

            this.polygons = items;
        },

        updatePolygon(data) {
            const items = this.value.items;

            let index = items.findIndex((item) => item.entryId === data.entryId && item.assetId === data.assetId);
            items[index].polygon = data.polygon;

            this.update({
                ...this.value,
                items: items,
            });
        },

        updateZoom(data) {
            this.zoom = data;
        },

        loadEntryMeta() {
            const params = {
                config: btoa(
                    JSON.stringify({
                        handle: 'collections',
                        type: 'entries',
                        collections: this.config.collections,
                        mode: 'tags',
                    })
                ),
                value: this.value.entries,
            };

            this.loading = true;
            this.$axios.get(cp_url('fields/field-meta'), { params }).then((response) => {
                this.entryMeta = response.data.meta.data;
                this.loading = false;

                this.updatePolygonList();
            });
        },
    },
    mounted() {
        this.loadEntryMeta();

        if (!this.value.items) {
            this.update({
                ...this.value,
                items: [],
            });
        }
    },
};
</script>
