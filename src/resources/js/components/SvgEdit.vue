<template>
    <div class="m-0 p-0" :style="'height: ' + this.height + 'px'" id="templateContainer" v-if="selectedImage && imgIsReady">
        <div class="transitionlayer relative">
            <div :style="backgroundStyle" class="svglayer relative">
                <svg
                    id="svgElem"
                    class="fgsvg"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    :viewBox="viewboxStyle"
                    xml:space="preserve"
                    @wheel.capture.prevent="setWheelZoom"
                    @mousedown="mousedownHandler"
                    @mousemove="mousemoveHandler"
                    @mouseup="mouseupHandler"
                >
          <g fill="rgba(64,0,128, .4)">
            <polygon
                id="resultPolygon"
                :points="polygon"
                :stroke-width="2*viewBox.factor/zoom"
                style="stroke: #fc0a;"
            ></polygon>
              <polygon
                  id="hiddenAddVertex"
                  :stroke-width="10*viewBox.factor/zoom"
                  class="polygonHelper"
                  :points="polygon"
                  fill="none"
                  style="stroke: rgba(0,0,0,0)"
              ></polygon>
              <circle
                  v-for="(item, index) in points" :key="index"
                  fill="rgba(255,255,0, 0.1)"
                  :stroke-width="0.707*viewBox.factor/zoom"
                  stroke="black"
                  @mouseover="vertexHover"
                  @mouseout="stopVertexHover"
                  :class="{minusHover: hoveringVertex}"
                  class="vertex"
                  :idx="index"
                  :r="4.8*viewBox.factor/zoom"
                  :cx="item[0]"
                  :cy="item[1]"
              />
          </g>
            <rect
                id="zoomSelection"
                :x="selection.x"
                :y="selection.y"
                :width="selection.width"
                :height="selection.height"
                fill="rgba(255,0,0,0.5)"
                style="fill: rgba(0,0,0,0.5); stroke: yellow; stroke-width: 1px; stroke-dasharray: 4;"
            ></rect>
            <g v-if="showAll">
                <polygon
                    v-for="(previewPolygon, id) in polygonCollection"
                    :id="previewPolygon.entryId"
                    :key="previewPolygon.entryId"
                    :stroke-width="2 * viewBox.factor / zoom"
                    :points="previewPolygon.polygon"
                    :fill="randomFill(id)"
                    class="allPolygons"
                    @click="setActiveObjectDelegate(previewPolygon.entryId)"
                />
            </g>
            </svg>
            </div>
        </div>
    </div>
</template>
<script>
import Point from '../lib/point';
import GeometryUtil from '../lib/geometry';

const util = new GeometryUtil();

const modes = {
    VIEW_MODE: 0,
    PAN_MODE: 1,
    BEFORE_ZOOM_MODE: 2,
    ZOOM_MODE: 3,
    MOVE_POINT: 4,
    EDIT_EDGE_MODE: 5
};
Object.freeze(modes);

export default Vue.extend({
    watch: {
        polygon() {
            if (!this.currentEntryId) { return; }

            this.polygonCollection[this.currentEntryId].polygon = this.polygon;

            const payload = {
                entryId: this.currentEntryId,
                assetId: this.selectedImage,
                polygon: this.polygon,
            }

            this.$emit('polygon-updated', payload);
        },
        zoomEnabled() {
            if (this.zoomEnabled) {
                this.setZoomMode(this.Modes.BEFORE_ZOOM_MODE)
            } else {
                this.setZoomMode(this.Modes.VIEW_MODE)
            }
        },
        selected() {
            this.setActiveObject(this.selected);
        },
        selectedImage() {
            this.setPolygonCollection();
            this.setActiveObject(this.selected);

            if (!this.images.length) {
                return;
            }

            this.setImage(this.selectedImage);
        },
        images() {
            this.setPolygonCollection();
            this.setActiveObject(this.selected);

            if (!this.images.length) {
                return;
            }

            this.setImage(this.selectedImage);
        }
    },
    mounted() {
        window.addEventListener("keyup", this.keyHandler);
        this.setImage(this.selectedImage);
        this.setPolygonCollection();
        this.setActiveObject(this.selected);
    },
    beforeDestroy() {
        window.removeEventListener("keyup", this.keyHandler);
    },
    name: "SvgEdit",
    props: {
        images: String,
        selectedImage: String,
        zoomEnabled: Boolean,
        selected: String,
        polygons: Array,
    },
    computed: {
        viewboxStyle() {
            return `0 0 ${this.viewBox.width} ${this.viewBox.height} `;
        },
        backgroundStyle() {
            let val = `transform: translateX(${this.translateX}px) `;
            val += `translateY(${this.translateY}px) scale(${this.zoom});`;
            val += `background-image: url(${this.img})`;
            return val;
        },
        polygon() {
            return this.points.map(point => point.join(",")).join(" ");
        },
        getCurrentMode() {
            return parseInt(this.currentMode, 10);
        },
        showAll() {
            return (this.currentEntryId==='showAll' || !this.currentEntryId)
        }
    },
    data: function() {
        return {
            currentFill: 0,
            fills: [
                'rgba(127,0,0,0.5)',
                'rgba(127,0,0,0.5)',
                'rgba(127,0,0,0.5)',
                'rgba(127,0,0,0.5)',
                'rgba(127,0,0,0.5)',
                'rgba(127,0,0,0.5)',
                'rgba(127,0,0,0.5)'
            ],
            img: '',
            imgIsReady: false,
            viewBox: {
                factor: 1,
                width: 0,
                height: 0
            },
            mouseDown: false,
            delta: 0,
            hasPanned: false,
            panThreshold: 8,
            target: null,
            Modes: modes,
            currentMode: modes.VIEW_MODE,
            activePoint: -1,
            selection: {
                startX: 0,
                startY: 0,
                x: 0.0,
                y: 0.0,
                width: 0,
                height: 0
            },
            factor: 0.8,
            oldOffsetX: 0,
            oldOffsetY: 0,
            offsetX: 0,
            offsetY: 0,
            points: [],
            maxZoom: 5,
            translateX: 0,
            translateY: 0,
            zoom: 1.0,
            hoveringVertex: false,
            polygonCollection: {},
            currentEntryId: null,
            height: 0,
        };
    },
    methods: {
        setPolygonCollection() {
            let collection = {};

            this.polygons.filter(item => item.assetId === this.selectedImage).map((item) => {
                collection[item.entryId] = item;
            });

            this.polygonCollection = collection;
        },
        randomFill(id) {
            let index = Object.keys(this.polygonCollection).indexOf(id);

            if (index === -1) {
                index = 0;
            }

            while (index > this.fills.length - 1) {
                index = index - this.fills.length;
            }

            return this.fills[index];
        },
        setActiveObjectDelegate(entryId) {
            if (this.currentMode !== this.Modes.PAN_MODE) {
                this.setActiveObject(entryId)
            }
        },
        setActiveObject(entryId) {
            if (entryId === 'showAll'){
                this.currentEntryId = null;
                this.points = [];
                return;
            }

            this.currentEntryId = entryId;

            if (! this.polygonCollection[entryId]) {
                this.polygonCollection[entryId] = {};
            }

            if (this.polygonCollection[entryId].polygon) {
                let polygon = this.polygonCollection[entryId].polygon;
                polygon = polygon.split(" ").map( vertex => vertex.split(",") );
                this.points = polygon;
            } else {
                this.points = [];
            }

            this.$emit('update:selected', this.currentEntryId);
        },
        keyHandler(ev) {
            if (ev.key === "z") {
                this.currentMode = this.Modes.BEFORE_ZOOM_MODE;
            }
        },
        mousedownHandler(ev) {
            this.mouseDown = true;

            if (this.currentMode === this.Modes.BEFORE_ZOOM_MODE) {
                this.currentMode = this.Modes.ZOOM_MODE;
                this.startSelectionZoom(ev);
                return;
            }

            if (ev.target.tagName === "circle") {
                this.target = "circle";
            } else {
                this.target = ev.target.getAttribute("id");
            }

            if (this.target === "circle") {
                if (!ev.shiftKey) {
                    this.currentMode = this.Modes.MOVE_POINT;
                    this.startMovePoint(ev);
                } else {
                    this.removePoint(ev.target.getAttribute("idx"));
                }

                return true;
            } else if (this.target === "hiddenAddVertex") {
                this.currentMode = this.Modes.EDIT_EDGE_MODE;
                this.addIntersectingVertex(ev);
                ev.stopPropagation();
                ev.preventDefault();
                return false;
            } else {
                this.currentMode = this.Modes.PAN_MODE;
                this.oldOffsetX = ev.offsetX;
                this.oldOffsetY = ev.offsetY;
            }
        },
        mouseupHandler(ev) {
            if (this.currentMode === this.Modes.ZOOM_MODE) {
                this.endZoomToSelection(ev);
            }

            if (
                !this.hasPanned &&
                this.currentMode === this.Modes.PAN_MODE &&
                !ev.shiftKey &&
                this.currentEntryId &&
                this.currentEntryId !== 'showAll'
            ) {
                this.addPoint(ev);
            }

            this.hasPanned = false;
            this.oldOffsetX = 0;
            this.oldOffsetY = 0;
            this.offsetX = 0;
            this.mouseDown = false;
            this.activePoint = -1;
            this.currentMode = this.Modes.VIEW_MODE;
        },
        mousemoveHandler(ev) {
            if (this.currentMode === this.Modes.ZOOM_MODE) {
                this.updateZoomSelectionRect(ev);
                return;
            }

            if (this.currentMode === this.Modes.EDIT_EDGE_MODE) {
                return;
            }

            this.offsetX = ev.offsetX;
            this.offsetY = ev.offsetY;

            if (this.currentMode === this.Modes.MOVE_POINT) {
                this.moveVertex(ev);
                return;
            }

            if (!this.hasPanned && this.mouseDown) {
                const len = util.getLineLength(
                    ev.offsetX,
                    ev.offsetY,
                    this.oldOffsetX,
                    this.oldOffsetY
                );
                this.delta = len;
                if (len >= this.panThreshold) {
                    this.hasPanned = true;
                    this.currentMode = this.Modes.PAN_MODE;
                }
            }

            if (this.hasPanned && this.mouseDown && this.zoom !== 1) {
                this.panViewport(ev);
            }
        },
        setZoomMode(mode) {
            if (this.currentMode !== mode) {
                this.currentMode = mode;
            } else {
                this.currentMode = this.Modes.VIEW_MODE;
            }
        },
        getIntersectionForPoint(x, y, width) {
            let lastIdx = this.points.length - 1;
            let checkPoint = new Point(x, y);

            return this.points.findIndex((item, index, arr) => {
                let cmp = index - 1;
                if (cmp < 0) cmp = lastIdx;
                let start = new Point(arr[cmp][0], arr[cmp][1]);
                let end = new Point(arr[index][0], arr[index][1]);
                return util.pointIntersectsLine(checkPoint, start, end, width)
            });
        },
        setImage(id) {
            if (! this.images.length) {
                this.img = '';
                return;
            }

            const imageMeta = this.images.find(image => image.id === id);
            const imgsrc = imageMeta.permalink;

            if (imgsrc === '') {
                this.img = '';
                return;
            }

            let image = new Image();
            image.onload = (r) => {
                const {offsetWidth,offsetHeight} = document.querySelector('div.transitionlayer');
                this.viewBox.width = r.target.naturalWidth;
                this.viewBox.height = r.target.naturalHeight;
                this.viewBox.factor = this.viewBox.width / offsetWidth;
                this.viewBox.clientWidth = offsetWidth;
                this.viewBox.clientHeight = offsetHeight;

                this.height = 2 + (this.viewBox.height / this.viewBox.factor );
            };

            image.src = imgsrc;
            this.img = imgsrc;
            this.translateX = 0;
            this.translateY = 0;
            this.zoom = 1;
            this.imgIsReady = true;
        },
        addPoint(ev) {
            const { clientWidth, clientHeight } = ev.target.closest(
                "div.transitionlayer"
            );
            const xFactor = this.viewBox.width / clientWidth;
            const yFactor = this.viewBox.height / clientHeight;
            const pointX = ev.offsetX * xFactor;
            const pointY = ev.offsetY * yFactor;
            this.points.push([pointX, pointY]);
        },
        removePoint(index) {
            let arr = this.points;
            this.points.splice(index, 1);
            this.points = arr;
        },
        addIntersectingVertex(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            const { clientWidth, clientHeight } = ev.target.closest(
                "div.transitionlayer"
            );
            const xFactor = this.viewBox.width / clientWidth;
            const yFactor = this.viewBox.height / clientHeight;
            const pointX = ev.offsetX * xFactor;
            const pointY = ev.offsetY * yFactor;
            let intersection = this.getIntersectionForPoint(
                pointX,
                pointY,
                10 / this.zoom
            );
            if (intersection !== -1) {
                this.insertVertex(pointX, pointY, intersection);
            }
        },
        insertVertex(x, y, index) {
            if (index === this.points.length) {
                this.points.push([x, y]);
                return;
            }
            const head = this.points.slice(0, index);
            const tail = this.points.slice(index);
            head.push([x, y]);
            this.points = head.concat(tail);
        },
        startMovePoint(ev) {
            this.activePoint = parseInt(ev.target.getAttribute("idx"), 10);
        },
        moveVertex(ev) {
            if (this.activePoint == -1) {
                return;
            }
            const { clientWidth, clientHeight } = ev.target.closest(
                "div.transitionlayer"
            );
            const xFactor = this.viewBox.width / clientWidth;
            const yFactor = this.viewBox.height / clientHeight;
            const pointX = ev.offsetX * xFactor;
            const pointY = ev.offsetY * yFactor;
            this.points[this.activePoint] = [pointX, pointY];
            this.points = this.points.slice(0);
        },
        panViewport(ev) {
            const { clientWidth, clientHeight } = ev.target.closest(
                "div.transitionlayer"
            );
            const deltaX = (ev.offsetX - this.oldOffsetX) / this.zoom;
            const deltaY = (ev.offsetY - this.oldOffsetY) / this.zoom;
            let newTranslateX = Math.max(
                this.translateX + deltaX,
                -clientWidth * this.zoom + clientWidth
            );
            let newTranslateY = Math.max(
                this.translateY + deltaY,
                -clientHeight * this.zoom + clientHeight
            );
            this.translateX = Math.min(newTranslateX, 0);
            this.translateY = Math.min(newTranslateY, 0);
        },
        endPanZoomHandler() {
            this.activePoint = -1;
        },
        setZoom(zoom, x, y) {
            if (zoom > this.maxZoom || zoom < 1) return;
            this.zoom = zoom;
            this.translateX = x * zoom;
            this.translateY = y * zoom;
        },
        updateZoomSelectionRect(ev) {
            const { clientWidth, clientHeight } = ev.target.closest(
                "div.transitionlayer"
            );
            const xFactor = this.viewBox.width / clientWidth;
            const yFactor = this.viewBox.height / clientHeight;
            const pointX = ev.offsetX * xFactor;
            const pointY = ev.offsetY * yFactor;
            this.selection.x = pointX;
            this.selection.y = pointY;
            if (pointX < this.selection.startX) {
                this.selection.x = pointX;
                this.selection.width = this.selection.startX - pointX;
            } else {
                this.selection.x = this.selection.startX;
                this.selection.width = pointX - this.selection.startX;
            }
            if (pointY <= this.selection.startY) {
                this.selection.y = pointY;
                this.selection.height = this.selection.startY - pointY;
            } else {
                this.selection.y = this.selection.startY;
                this.selection.height = pointY - this.selection.startY;
            }
        },
        setSelectionZoom(x, y, width, height, ev) {
            const { clientWidth, clientHeight } = ev.target.closest(
                "div.transitionlayer"
            );
            const xFactor = this.viewBox.width / clientWidth;
            const yFactor = this.viewBox.height / clientHeight;

            // this is how much to zoom in by
            const factor = Math.min(this.viewBox.width / width, this.viewBox.height / height);

            this.zoom *= factor;
            this.translateX -= (x / xFactor) * this.zoom;
            this.translateY -= (y / yFactor) * this.zoom;
        },
        endZoomToSelection(ev) {
            this.setSelectionZoom(
                this.selection.x,
                this.selection.y,
                this.selection.width,
                this.selection.height,
                ev
            );
            this.selection = {
                startX: 0,
                startY: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };

            this.$emit('zoom-updated', false);
        },
        startSelectionZoom(ev) {
            const { clientWidth, clientHeight } = ev.target.closest(
                "div.transitionlayer"
            );
            const xFactor = this.viewBox.width / clientWidth;
            const yFactor = this.viewBox.height / clientHeight;
            const pointX = ev.offsetX * xFactor;
            const pointY = ev.offsetY * yFactor;
            this.selection.startX = pointX;
            this.selection.startY = pointY;
            this.selection.x = pointX;
            this.selection.y = pointY;
        },
        setWheelZoom(ev) {
            const { clientWidth, clientHeight } = ev.target.closest(
                "div.transitionlayer"
            );
            const { offsetX, offsetY } = ev;
            const factor = this.factor;
            let delta = -ev.deltaY / 600;
            // cap the delta to [-1,1] for cross browser consistency
            delta = Math.max(-1, Math.min(1, delta));
            let scale = this.zoom;
            const targetX = offsetX / scale - this.translateX / scale;
            const targetY = offsetY / scale - this.translateY / scale;
            scale += delta * factor * this.zoom;
            this.zoom = Math.max(1, Math.min(this.maxZoom, scale));
            scale = this.zoom;
            let pos = {};
            pos.x = -targetX * scale + offsetX;
            pos.y = -targetY * scale + offsetY;
            if (pos.x > 0) {
                pos.x = 0;
            }
            if (pos.x + clientWidth * scale < clientWidth) {
                pos.x = -clientWidth * (scale - 1);
            }
            if (pos.y > 0) {
                pos.y = 0;
            }
            if (pos.y + clientHeight * scale < clientHeight) {
                pos.y = -clientHeight * (scale - 1);
            }
            this.translateX = pos.x;
            this.translateY = pos.y;
        },
        vertexHover(ev) {
            if (ev.shiftKey) this.hoveringVertex = true;
        },
        stopVertexHover() {
            this.hoveringVertex = false;
        }
    }
});
</script>
<style scoped>
.svglayer {
    transform-origin: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
}
.vertex {
    fill: yellow;
}
.polygonHelper {
    fill: none;
}
.transitionlayer {
    max-width: 1600px;
    overflow: hidden;
    margin: 0 auto;
}
.vertex:hover {
    cursor: move;
}
.vertex.minusHover:hover {
    cursor: crosshair;
}
.allPolygons:hover {
    fill: rgba(128,64,0,0.5);
}
</style>
