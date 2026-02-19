import ImageMapEditor from './components/fieldtypes/ImageMapEditor.vue';
import SvgEdit from './components/SvgEdit.vue';

Statamic.booting(() => {
    Statamic.component('image_map_editor-fieldtype', ImageMapEditor);

    Statamic.component('svg-edit', SvgEdit);
});
