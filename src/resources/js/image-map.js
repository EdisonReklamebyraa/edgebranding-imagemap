import ImageMapEditor from './components/fieldtypes/ImageMapEditor';
import SvgEdit from './components/SvgEdit';

Statamic.booting(() => {
    Statamic.component('image_map_editor-fieldtype', ImageMapEditor);

    Vue.component('svg-edit', SvgEdit);
});
