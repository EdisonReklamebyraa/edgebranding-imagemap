/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/SvgEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/components/SvgEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/point */ "./src/resources/js/lib/point.js");
/* harmony import */ var _lib_geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/geometry */ "./src/resources/js/lib/geometry.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var util = new _lib_geometry__WEBPACK_IMPORTED_MODULE_1__["default"]();
var modes = {
  VIEW_MODE: 0,
  PAN_MODE: 1,
  BEFORE_ZOOM_MODE: 2,
  ZOOM_MODE: 3,
  MOVE_POINT: 4,
  EDIT_EDGE_MODE: 5
};
Object.freeze(modes);
/* harmony default export */ __webpack_exports__["default"] = (Vue.extend({
  watch: {
    polygon: function polygon() {
      if (!this.currentEntryId) {
        return;
      }

      this.polygonCollection[this.currentEntryId].polygon = this.polygon;
      var payload = {
        entryId: this.currentEntryId,
        assetId: this.selectedImage,
        polygon: this.polygon
      };
      this.$emit('polygon-updated', payload);
    },
    zoomEnabled: function zoomEnabled() {
      if (this.zoomEnabled) {
        this.setZoomMode(this.Modes.BEFORE_ZOOM_MODE);
      } else {
        this.setZoomMode(this.Modes.VIEW_MODE);
      }
    },
    selected: function selected() {
      this.setActiveObject(this.selected);
    },
    selectedImage: function selectedImage() {
      this.setPolygonCollection();
      this.setActiveObject(this.selected);

      if (!this.images.length > 0) {
        return;
      }

      this.setImage(this.selectedImage);
    },
    images: function images() {
      this.setPolygonCollection();
      this.setActiveObject(this.selected);

      if (!this.images.length > 0) {
        return;
      }

      this.setImage(this.selectedImage);
    }
  },
  mounted: function mounted() {
    window.addEventListener("keyup", this.keyHandler);
    this.setImage(this.selectedImage);
    this.setPolygonCollection();
    this.setActiveObject(this.selected);
  },
  name: "SvgEdit",
  props: {
    images: String,
    selectedImage: String,
    zoomEnabled: Boolean,
    selected: String,
    polygons: Array
  },
  computed: {
    viewboxStyle: function viewboxStyle() {
      return "0 0 ".concat(this.viewBox.width, " ").concat(this.viewBox.height, " ");
    },
    backgroundStyle: function backgroundStyle() {
      var val = "transform: translateX(".concat(this.translateX, "px) ");
      val += "translateY(".concat(this.translateY, "px) scale(").concat(this.zoom, ");");
      val += "background-image: url(".concat(this.img, ")");
      return val;
    },
    polygon: function polygon() {
      return this.points.map(function (point) {
        return point.join(",");
      }).join(" ");
    },
    getCurrentMode: function getCurrentMode() {
      return parseInt(this.currentMode, 10);
    },
    showAll: function showAll() {
      return this.currentEntryId === 'showAll' || !this.currentEntryId;
    }
  },
  data: function data() {
    return {
      currentFill: 0,
      fills: ['rgba(127,0,0,0.5)', 'rgba(127,0,0,0.5)', 'rgba(127,0,0,0.5)', 'rgba(127,0,0,0.5)', 'rgba(127,0,0,0.5)', 'rgba(127,0,0,0.5)', 'rgba(127,0,0,0.5)'],
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
      height: 0
    };
  },
  methods: {
    setPolygonCollection: function setPolygonCollection() {
      var _this = this;

      var collection = {};
      this.polygons.filter(function (item) {
        return item.assetId === _this.selectedImage;
      }).map(function (item) {
        collection[item.entryId] = item;
      });
      this.polygonCollection = collection;
    },
    randomFill: function randomFill(id) {
      var index = Object.keys(this.polygonCollection).indexOf(id);

      if (index === -1) {
        index = 0;
      }

      while (index > this.fills.length - 1) {
        index = index - this.fills.length;
      }

      return this.fills[index];
    },
    setActiveObjectDelegate: function setActiveObjectDelegate(entryId) {
      if (this.currentMode !== this.Modes.PAN_MODE) {
        this.setActiveObject(entryId);
      }
    },
    setActiveObject: function setActiveObject(entryId) {
      if (entryId === 'showAll') {
        this.currentEntryId = null;
        this.points = [];
        return;
      }

      this.currentEntryId = entryId;

      if (!this.polygonCollection[entryId]) {
        this.polygonCollection[entryId] = {};
      }

      if (this.polygonCollection[entryId].polygon) {
        var polygon = this.polygonCollection[entryId].polygon;
        polygon = polygon.split(" ").map(function (vertex) {
          return vertex.split(",");
        });
        this.points = polygon;
      } else {
        this.points = [];
      }

      this.$emit('update:selected', this.currentEntryId);
    },
    keyHandler: function keyHandler(ev) {
      if (ev.key === "z") {
        this.currentMode = this.Modes.BEFORE_ZOOM_MODE;
      }
    },
    mousedownHandler: function mousedownHandler(ev) {
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
    mouseupHandler: function mouseupHandler(ev) {
      if (this.currentMode === this.Modes.ZOOM_MODE) {
        this.endZoomToSelection(ev);
      }

      if (!this.hasPanned && this.currentMode === this.Modes.PAN_MODE && !ev.shiftKey && this.currentEntryId && this.currentEntryId !== 'showAll') {
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
    mousemoveHandler: function mousemoveHandler(ev) {
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
        var len = util.getLineLength(ev.offsetX, ev.offsetY, this.oldOffsetX, this.oldOffsetY);
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
    setZoomMode: function setZoomMode(mode) {
      // const mode = ev.srcElement.getAttribute("mode");
      if (this.currentMode !== mode) {
        this.currentMode = mode;
      } else {
        this.currentMode = this.Modes.VIEW_MODE;
      }
    },
    getIntersectionForPoint: function getIntersectionForPoint(x, y, width) {
      var lastIdx = this.points.length - 1;
      var checkPoint = new _lib_point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
      return this.points.findIndex(function (item, index, arr) {
        var cmp = index - 1;
        if (cmp < 0) cmp = lastIdx;
        var start = new _lib_point__WEBPACK_IMPORTED_MODULE_0__["default"](arr[cmp][0], arr[cmp][1]);
        var end = new _lib_point__WEBPACK_IMPORTED_MODULE_0__["default"](arr[index][0], arr[index][1]);
        return util.pointIntersectsLine(checkPoint, start, end, width);
      });
    },
    setImage: function setImage(id) {
      var _this2 = this;

      if (!this.images.length) {
        this.img = '';
        return;
      }

      var imageMeta = this.images.find(function (image) {
        return image.id === id;
      });
      var imgsrc = imageMeta.permalink;

      if (imgsrc === '') {
        this.img = '';
        return;
      }

      var image = new Image();

      image.onload = function (r) {
        var _document$querySelect = document.querySelector('div.transitionlayer'),
            offsetWidth = _document$querySelect.offsetWidth,
            offsetHeight = _document$querySelect.offsetHeight;

        _this2.viewBox.width = r.target.naturalWidth;
        _this2.viewBox.height = r.target.naturalHeight;
        _this2.viewBox.factor = _this2.viewBox.width / offsetWidth;
        _this2.viewBox.clientWidth = offsetWidth;
        _this2.viewBox.clientHeight = offsetHeight;
        _this2.height = 2 + _this2.viewBox.height / _this2.viewBox.factor;
      };

      image.src = imgsrc;
      this.img = imgsrc;
      this.translateX = 0;
      this.translateY = 0;
      this.zoom = 1;
      this.imgIsReady = true;
    },
    addPoint: function addPoint(ev) {
      var _ev$srcElement$closes = ev.srcElement.closest("div.transitionlayer"),
          clientWidth = _ev$srcElement$closes.clientWidth,
          clientHeight = _ev$srcElement$closes.clientHeight;

      var xFactor = this.viewBox.width / clientWidth;
      var yFactor = this.viewBox.height / clientHeight;
      var pointX = ev.offsetX * xFactor;
      var pointY = ev.offsetY * yFactor;
      this.points.push([pointX, pointY]);
    },
    removePoint: function removePoint(index) {
      var arr = this.points;
      this.points.splice(index, 1);
      this.points = arr;
    },
    addIntersectingVertex: function addIntersectingVertex(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var _ev$srcElement$closes2 = ev.srcElement.closest("div.transitionlayer"),
          clientWidth = _ev$srcElement$closes2.clientWidth,
          clientHeight = _ev$srcElement$closes2.clientHeight;

      var xFactor = this.viewBox.width / clientWidth;
      var yFactor = this.viewBox.height / clientHeight;
      var pointX = ev.offsetX * xFactor;
      var pointY = ev.offsetY * yFactor;
      var intersection = this.getIntersectionForPoint(pointX, pointY, 10 / this.zoom);

      if (intersection != -1) {
        this.insertVertex(pointX, pointY, intersection);
      }
    },
    insertVertex: function insertVertex(x, y, index) {
      if (index === this.points.length) {
        this.points.push([x, y]);
        return;
      }

      var head = this.points.slice(0, index);
      var tail = this.points.slice(index);
      head.push([x, y]);
      this.points = head.concat(tail);
    },
    startMovePoint: function startMovePoint(ev) {
      this.activePoint = parseInt(ev.target.getAttribute("idx"), 10);
    },
    moveVertex: function moveVertex(ev) {
      if (this.activePoint == -1) {
        return;
      }

      var _ev$srcElement$closes3 = ev.srcElement.closest("div.transitionlayer"),
          clientWidth = _ev$srcElement$closes3.clientWidth,
          clientHeight = _ev$srcElement$closes3.clientHeight;

      var xFactor = this.viewBox.width / clientWidth;
      var yFactor = this.viewBox.height / clientHeight;
      var pointX = ev.offsetX * xFactor;
      var pointY = ev.offsetY * yFactor;
      this.points[this.activePoint] = [pointX, pointY];
      this.points = this.points.slice(0);
    },
    panViewport: function panViewport(ev) {
      var _ev$srcElement$closes4 = ev.srcElement.closest("div.transitionlayer"),
          clientWidth = _ev$srcElement$closes4.clientWidth,
          clientHeight = _ev$srcElement$closes4.clientHeight;

      var deltaX = (ev.offsetX - this.oldOffsetX) / this.zoom;
      var deltaY = (ev.offsetY - this.oldOffsetY) / this.zoom;
      var newTranslateX = Math.max(this.translateX + deltaX, -clientWidth * this.zoom + clientWidth);
      var newTranslateY = Math.max(this.translateY + deltaY, -clientHeight * this.zoom + clientHeight);
      this.translateX = Math.min(newTranslateX, 0);
      this.translateY = Math.min(newTranslateY, 0);
    },
    endPanZoomHandler: function endPanZoomHandler() {
      this.activePoint = -1;
    },
    setZoom: function setZoom(zoom, x, y) {
      if (zoom > this.maxZoom || zoom < 1) return;
      this.zoom = zoom;
      this.translateX = x * zoom;
      this.translateY = y * zoom;
    },
    updateZoomSelectionRect: function updateZoomSelectionRect(ev) {
      var _ev$target$closest = ev.target.closest("div.transitionlayer"),
          clientWidth = _ev$target$closest.clientWidth,
          clientHeight = _ev$target$closest.clientHeight;

      var xFactor = this.viewBox.width / clientWidth;
      var yFactor = this.viewBox.height / clientHeight;
      var pointX = ev.offsetX * xFactor;
      var pointY = ev.offsetY * yFactor;
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
    setSelectionZoom: function setSelectionZoom(x, y, width, height, ev) {
      var _ev$target$closest2 = ev.target.closest("div.transitionlayer"),
          clientWidth = _ev$target$closest2.clientWidth,
          clientHeight = _ev$target$closest2.clientHeight;

      var xFactor = this.viewBox.width / clientWidth;
      var yFactor = this.viewBox.height / clientHeight; // this is how much to zoom in by

      var factor = Math.min(this.viewBox.width / width, this.viewBox.height / height);
      this.zoom *= factor;
      this.translateX -= x / xFactor * this.zoom;
      this.translateY -= y / yFactor * this.zoom;
    },
    endZoomToSelection: function endZoomToSelection(ev) {
      this.setSelectionZoom(this.selection.x, this.selection.y, this.selection.width, this.selection.height, ev);
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
    startSelectionZoom: function startSelectionZoom(ev) {
      var _ev$srcElement$closes5 = ev.srcElement.closest("div.transitionlayer"),
          clientWidth = _ev$srcElement$closes5.clientWidth,
          clientHeight = _ev$srcElement$closes5.clientHeight;

      var xFactor = this.viewBox.width / clientWidth;
      var yFactor = this.viewBox.height / clientHeight;
      var pointX = ev.offsetX * xFactor;
      var pointY = ev.offsetY * yFactor;
      this.selection.startX = pointX;
      this.selection.startY = pointY;
      this.selection.x = pointX;
      this.selection.y = pointY;
    },
    setWheelZoom: function setWheelZoom(ev) {
      var _ev$target$closest3 = ev.target.closest("div.transitionlayer"),
          clientWidth = _ev$target$closest3.clientWidth,
          clientHeight = _ev$target$closest3.clientHeight;

      var offsetX = ev.offsetX,
          offsetY = ev.offsetY;
      var factor = this.factor;
      var delta = -ev.deltaY / 600; // cap the delta to [-1,1] for cross browser consistency

      delta = Math.max(-1, Math.min(1, delta));
      var scale = this.zoom;
      var targetX = offsetX / scale - this.translateX / scale;
      var targetY = offsetY / scale - this.translateY / scale;
      scale += delta * factor * this.zoom;
      this.zoom = Math.max(1, Math.min(this.maxZoom, scale));
      scale = this.zoom;
      var pos = {};
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
    vertexHover: function vertexHover(ev) {
      if (ev.shiftKey) this.hoveringVertex = true;
    },
    stopVertexHover: function stopVertexHover() {
      this.hoveringVertex = false;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [Fieldtype],
  data: function data() {
    return {
      zoom: false,
      selectedDropdown: 'showAll',
      entryMeta: [],
      loading: false,
      polygons: [],
      images: [],
      selectedImage: null
    };
  },
  computed: {
    entriesWithMeta: function entriesWithMeta() {
      var _this = this;

      return this.value.entries.map(function (entryId) {
        return _this.entryMeta.find(function (e) {
          return e.id === entryId;
        });
      });
    }
  },
  methods: {
    onImageUploaded: function onImageUploaded(data) {
      this.update(_objectSpread(_objectSpread({}, this.value), {}, {
        images: data
      }));
      var images = [];
      var self = this;
      Promise.all(data.map(function (image) {
        return self.getImage(image);
      })).then(function (responses) {
        responses.forEach(function (response) {
          images.push(response[0]);
        });
        self.images = images;
        self.selectedImage = images[0].id;
        self.updatePolygonList();
      });
    },
    onEntriesUpdated: function onEntriesUpdated(data) {
      var _this2 = this;

      this.update(_objectSpread(_objectSpread({}, this.value), {}, {
        entries: data
      }));
      this.$nextTick(function () {
        _this2.updatePolygonList();
      });
    },
    getImage: function getImage(assets) {
      return this.$axios.post(cp_url('assets-fieldtype'), {
        assets: assets
      }).then(function (response) {
        return response.data;
      });
    },
    activateZoomMode: function activateZoomMode() {
      this.zoom = !this.zoom;
    },
    updatePolygonList: function updatePolygonList() {
      var _this3 = this;

      if (!this.value.entries) {
        this.value.entries = [];
        return;
      }

      var items = this.value.entries.flatMap(function (entryId) {
        var entry = _this3.entriesWithMeta.find(function (entry) {
          return entry.id === entryId;
        });

        return _this3.value.images.map(function (assetId) {
          var existingItem = _this3.value.items.find(function (item) {
            return item.entryId === entryId && item.assetId === assetId;
          });

          if (existingItem) {
            return existingItem;
          }

          return {
            entryId: entryId,
            assetId: assetId,
            label: entry.title,
            polygon: ''
          };
        });
      });
      this.update(_objectSpread(_objectSpread({}, this.value), {}, {
        items: items
      }));
      this.polygons = items;
    },
    updatePolygon: function updatePolygon(data) {
      var items = this.value.items;
      var index = items.findIndex(function (item) {
        return item.entryId === data.entryId && item.assetId === data.assetId;
      });
      items[index].polygon = data.polygon;
      this.update(_objectSpread(_objectSpread({}, this.value), {}, {
        items: items
      }));
    },
    updateZoom: function updateZoom(data) {
      this.zoom = data;
    },
    loadEntryMeta: function loadEntryMeta() {
      var _this4 = this;

      var params = {
        config: btoa(JSON.stringify({
          handle: 'collections',
          type: 'entries',
          collections: this.config.collections,
          mode: 'tags'
        })),
        value: this.value.entries
      };
      this.loading = true;
      this.$axios.get(cp_url('fields/field-meta'), {
        params: params
      }).then(function (response) {
        _this4.entryMeta = response.data.meta.data;
        _this4.loading = false;

        _this4.updatePolygonList();
      });
    }
  },
  mounted: function mounted() {
    this.loadEntryMeta();

    if (!this.value.items) {
      this.update(_objectSpread(_objectSpread({}, this.value), {}, {
        items: []
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.backgroundStyle {\n    position: relative;\n}\n.svglayer {\n    transform-origin: 0 0;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\nbutton {\n    font-size: 1rem;\n}\n.foo {\n    background: yellow;\n}\n.vertex {\n    fill: yellow;\n}\n.polygonHelper {\n    fill: none;\n}\n.transitionlayer {\n    max-width: 1600px;\n    overflow: hidden;\n    margin: 0 auto;\n    /* max-height: 52vh */\n}\n.vertex:hover {\n    cursor: move;\n}\n.vertex.minusHover:hover {\n    cursor: crosshair;\n}\n/* div.transitionlayer div {\n  transition: transform 0.25s ease;\n} */\nhtml, body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n.allPolygons:hover{\n    fill: rgba(128,64,0,0.5);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SvgEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/SvgEdit.vue?vue&type=template&id=05e1c148&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/components/SvgEdit.vue?vue&type=template&id=05e1c148& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.selectedImage && _vm.imgIsReady
    ? _c(
        "div",
        {
          staticClass: "m-0 p-0",
          style: "height: " + this.height + "px",
          attrs: { id: "templateContainer" }
        },
        [
          _c("div", { staticClass: "transitionlayer relative" }, [
            _c(
              "div",
              { staticClass: "svglayer relative", style: _vm.backgroundStyle },
              [
                _c(
                  "svg",
                  {
                    staticClass: "fgsvg",
                    attrs: {
                      id: "svgElem",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: _vm.viewboxStyle,
                      "xml:space": "preserve"
                    },
                    on: {
                      "!wheel": function($event) {
                        $event.preventDefault()
                        return _vm.setWheelZoom($event)
                      },
                      mousedown: _vm.mousedownHandler,
                      mousemove: _vm.mousemoveHandler,
                      mouseup: _vm.mouseupHandler
                    }
                  },
                  [
                    _c(
                      "g",
                      { attrs: { fill: "rgba(64,0,128, .4)" } },
                      [
                        _c("polygon", {
                          staticStyle: { stroke: "#fc0a" },
                          attrs: {
                            id: "resultPolygon",
                            points: _vm.polygon,
                            "stroke-width": (2 * _vm.viewBox.factor) / _vm.zoom
                          }
                        }),
                        _vm._v(" "),
                        _c("polygon", {
                          staticClass: "polygonHelper",
                          staticStyle: { stroke: "rgba(0,0,0,0)" },
                          attrs: {
                            id: "hiddenAddVertex",
                            "stroke-width":
                              (10 * _vm.viewBox.factor) / _vm.zoom,
                            points: _vm.polygon,
                            fill: "none"
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.points, function(item, index) {
                          return _c("circle", {
                            key: index,
                            staticClass: "vertex",
                            class: { minusHover: _vm.hoveringVertex },
                            attrs: {
                              fill: "rgba(255,255,0, 0.1)",
                              "stroke-width":
                                (0.707 * _vm.viewBox.factor) / _vm.zoom,
                              stroke: "black",
                              idx: index,
                              r: (4.8 * _vm.viewBox.factor) / _vm.zoom,
                              cx: item[0],
                              cy: item[1]
                            },
                            on: {
                              mouseover: _vm.vertexHover,
                              mouseout: _vm.stopVertexHover
                            }
                          })
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("rect", {
                      staticStyle: {
                        fill: "rgba(0,0,0,0.5)",
                        stroke: "yellow",
                        "stroke-width": "1px",
                        "stroke-dasharray": "4"
                      },
                      attrs: {
                        id: "zoomSelection",
                        x: _vm.selection.x,
                        y: _vm.selection.y,
                        width: _vm.selection.width,
                        height: _vm.selection.height,
                        fill: "rgba(255,0,0,0.5)"
                      }
                    }),
                    _vm._v(" "),
                    _vm.showAll
                      ? _c(
                          "g",
                          _vm._l(_vm.polygonCollection, function(
                            previewPolygon,
                            id
                          ) {
                            return _c("polygon", {
                              key: previewPolygon.entryId,
                              staticClass: "allPolygons",
                              attrs: {
                                id: previewPolygon.entryId,
                                "stroke-width":
                                  (2 * _vm.viewBox.factor) / _vm.zoom,
                                points: previewPolygon.polygon,
                                fill: _vm.randomFill(id)
                              },
                              on: {
                                click: function($event) {
                                  return _vm.setActiveObjectDelegate(
                                    previewPolygon.entryId
                                  )
                                }
                              }
                            })
                          }),
                          0
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=template&id=c625b4d0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=template&id=c625b4d0& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "flex flex-wrap gap-1" },
      [
        _c("publish-field-meta", {
          staticClass: "w-1/2 mr-2 assets-fieldtype",
          attrs: {
            config: { type: "assets" },
            "initial-value": _vm.value.images,
            "initial-meta": { container: _vm.config.container }
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var meta = ref.meta
                var value = ref.value
                var loading = ref.loading
                return _c(
                  "div",
                  {},
                  [
                    _c("label", { staticClass: "publish-field-label mb-1" }, [
                      _c("span", { staticClass: "cursor-pointer" }, [
                        _vm._v("Image")
                      ])
                    ]),
                    _vm._v(" "),
                    !loading
                      ? _c("assets-fieldtype", {
                          ref: "asset",
                          attrs: {
                            config: {
                              container: _vm.config.container,
                              mode: "grid",
                              allow_uploads: true,
                              type: "assets",
                              display: "assets",
                              component: "assets",
                              handle: "assets"
                            },
                            value: value,
                            meta: meta,
                            handle: "asset"
                          },
                          on: { input: _vm.onImageUploaded }
                        })
                      : _vm._e()
                  ],
                  1
                )
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("publish-field-meta", {
          staticClass: "w-1/2 flex-1",
          attrs: {
            config: {
              handle: "collections",
              type: "entries",
              collections: _vm.config.collections,
              mode: "tags"
            },
            "initial-value": _vm.value.entries
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var meta = ref.meta
                var value = ref.value
                var loading = ref.loading
                return _c(
                  "div",
                  {},
                  [
                    _c("label", { staticClass: "publish-field-label mb-1" }, [
                      _c("span", {
                        staticClass: "cursor-pointer",
                        domProps: { innerHTML: _vm._s(_vm.__("Buildings")) }
                      })
                    ]),
                    _vm._v(" "),
                    !loading
                      ? _c("relationship-fieldtype", {
                          ref: "entry",
                          attrs: {
                            config: {
                              handle: "collections",
                              type: "entries",
                              collections: _vm.config.collections,
                              mode: "tags"
                            },
                            value: value,
                            meta: meta,
                            handle: "entry"
                          },
                          on: {
                            input: _vm.onEntriesUpdated,
                            "meta-updated": function($event) {
                              meta.data = $event.data
                              _vm.entryMeta = $event.data
                            }
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              }
            }
          ])
        })
      ],
      1
    ),
    _vm._v(" "),
    !_vm.loading
      ? _c("div", { staticClass: "imagemapeditor mx-auto w-full mt-4" }, [
          _c("label", { staticClass: "publish-field-label mb-1" }, [
            _c("span", {
              staticClass: "cursor-pointer",
              domProps: { innerHTML: _vm._s(_vm.__("Editor")) }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex-initial control mb-1 mr-1 field select-input"
                },
                [
                  _c("button", {
                    staticClass: "btn",
                    class: _vm.zoom ? "btn-primary" : "",
                    domProps: { innerHTML: _vm._s(_vm.__("Forstørr område")) },
                    on: {
                      click: function($event) {
                        return _vm.activateZoomMode()
                      }
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("v-select", {
                staticClass: "w-full mr-1",
                attrs: {
                  options: _vm.images
                    .map(function(image) {
                      if (image === undefined) {
                        return null
                      }

                      return {
                        value: image.id,
                        label: image.values.alt || image.filename
                      }
                    })
                    .filter(function(e) {
                      return e !== null
                    }),
                  reduce: function(selection) {
                    return selection.value
                  },
                  clearable: false
                },
                model: {
                  value: _vm.selectedImage,
                  callback: function($$v) {
                    _vm.selectedImage = $$v
                  },
                  expression: "selectedImage"
                }
              }),
              _vm._v(" "),
              _c("v-select", {
                staticClass: "w-full z-200",
                attrs: {
                  options: [
                    {
                      value: "showAll",
                      label: _vm.__("Velg eiendom / vis alle")
                    }
                  ].concat(
                    _vm.entriesWithMeta
                      .map(function(entry) {
                        if (entry === undefined) {
                          return null
                        }

                        return {
                          value: entry.id,
                          label: entry.title
                        }
                      })
                      .filter(function(e) {
                        return e !== null
                      })
                  ),
                  reduce: function(selection) {
                    return selection.value
                  },
                  clearable: false
                },
                model: {
                  value: _vm.selectedDropdown,
                  callback: function($$v) {
                    _vm.selectedDropdown = $$v
                  },
                  expression: "selectedDropdown"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { id: "editor" } },
            [
              _vm.polygons.length && _vm.images.length > 0
                ? _c("svg-edit", {
                    attrs: {
                      selected: _vm.selectedDropdown,
                      polygons: _vm.polygons,
                      "zoom-enabled": _vm.zoom,
                      images: _vm.images,
                      "selected-image": _vm.selectedImage
                    },
                    on: {
                      "polygon-updated": _vm.updatePolygon,
                      "zoom-updated": _vm.updateZoom,
                      "update:selected": function($event) {
                        _vm.selectedDropdown = $event
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/resources/js/components/SvgEdit.vue":
/*!*************************************************!*\
  !*** ./src/resources/js/components/SvgEdit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SvgEdit_vue_vue_type_template_id_05e1c148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgEdit.vue?vue&type=template&id=05e1c148& */ "./src/resources/js/components/SvgEdit.vue?vue&type=template&id=05e1c148&");
/* harmony import */ var _SvgEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgEdit.vue?vue&type=script&lang=js& */ "./src/resources/js/components/SvgEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SvgEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SvgEdit.vue?vue&type=style&index=0&lang=css& */ "./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SvgEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SvgEdit_vue_vue_type_template_id_05e1c148___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SvgEdit_vue_vue_type_template_id_05e1c148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/resources/js/components/SvgEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/resources/js/components/SvgEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/resources/js/components/SvgEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SvgEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/SvgEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SvgEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/SvgEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/resources/js/components/SvgEdit.vue?vue&type=template&id=05e1c148&":
/*!********************************************************************************!*\
  !*** ./src/resources/js/components/SvgEdit.vue?vue&type=template&id=05e1c148& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_template_id_05e1c148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SvgEdit.vue?vue&type=template&id=05e1c148& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/SvgEdit.vue?vue&type=template&id=05e1c148&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_template_id_05e1c148___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgEdit_vue_vue_type_template_id_05e1c148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/resources/js/components/fieldtypes/ImageMapEditor.vue":
/*!*******************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/ImageMapEditor.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageMapEditor_vue_vue_type_template_id_c625b4d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageMapEditor.vue?vue&type=template&id=c625b4d0& */ "./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=template&id=c625b4d0&");
/* harmony import */ var _ImageMapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageMapEditor.vue?vue&type=script&lang=js& */ "./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageMapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageMapEditor_vue_vue_type_template_id_c625b4d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageMapEditor_vue_vue_type_template_id_c625b4d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/resources/js/components/fieldtypes/ImageMapEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageMapEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=template&id=c625b4d0&":
/*!**************************************************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=template&id=c625b4d0& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMapEditor_vue_vue_type_template_id_c625b4d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageMapEditor.vue?vue&type=template&id=c625b4d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/fieldtypes/ImageMapEditor.vue?vue&type=template&id=c625b4d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMapEditor_vue_vue_type_template_id_c625b4d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMapEditor_vue_vue_type_template_id_c625b4d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/resources/js/image-map.js":
/*!***************************************!*\
  !*** ./src/resources/js/image-map.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fieldtypes_ImageMapEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes/ImageMapEditor */ "./src/resources/js/components/fieldtypes/ImageMapEditor.vue");
/* harmony import */ var _components_SvgEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SvgEdit */ "./src/resources/js/components/SvgEdit.vue");


Statamic.booting(function () {
  Statamic.component('image_map_editor-fieldtype', _components_fieldtypes_ImageMapEditor__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Vue.component('svg-edit', _components_SvgEdit__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "./src/resources/js/lib/geometry.js":
/*!******************************************!*\
  !*** ./src/resources/js/lib/geometry.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/resources/js/lib/point.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GeometryUtil = /*#__PURE__*/function () {
  function GeometryUtil() {
    _classCallCheck(this, GeometryUtil);
  }

  _createClass(GeometryUtil, [{
    key: "getLineLength",
    value: function getLineLength(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
  }, {
    key: "getAngle",
    value: function getAngle(pointA, pointB) {
      // set pointA as origin;
      var dx = pointB.x - pointA.x;
      var dy = pointB.y - pointA.y;
      var theta = Math.atan2(-dy, dx); // turn it clockwise, since our coordinate system is
      // upside down, so; theta = -theta;

      if (theta < 0) {
        theta += 2 * Math.PI;
      }

      return theta;
    }
  }, {
    key: "rotate",
    value: function rotate(origin, point, theta) {
      var cos = Math.cos(theta);
      var sin = Math.sin(theta);
      var x = point.x * cos - point.y * sin;
      var y = point.y * cos + point.x * sin;
      return new _point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    }
  }, {
    key: "pointIntersectsLine",
    value: function pointIntersectsLine(checkPoint, lineStart, lineEnd, leeway) {
      var o = new _point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
      var lineAngle = this.getAngle(lineStart, lineEnd);
      var newLineEnd = this.rotate(o, lineEnd, lineAngle);
      var newLineStart = this.rotate(o, lineStart, lineAngle);
      var newPoint = this.rotate(o, checkPoint, lineAngle);

      if (newPoint.x <= Math.max(newLineStart.x, newLineEnd.x) && newPoint.x >= Math.min(newLineStart.x, newLineEnd.x) && newPoint.y <= newLineStart.y + leeway / 2 && newPoint.y >= newLineEnd.y - leeway / 2) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return GeometryUtil;
}();

/* harmony default export */ __webpack_exports__["default"] = (GeometryUtil);

/***/ }),

/***/ "./src/resources/js/lib/point.js":
/*!***************************************!*\
  !*** ./src/resources/js/lib/point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function Point(x, y) {
  _classCallCheck(this, Point);

  this.x = x;
  this.y = y;
};

/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/resources/js/image-map.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rias/Code/Properti-Imagemap/addons/r8edge/imagemap/src/resources/js/image-map.js */"./src/resources/js/image-map.js");


/***/ })

/******/ });