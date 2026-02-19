# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # watch and rebuild on changes
npm run prod      # production build
npm run format    # prettier formatting
```

Always commit the compiled `dist/js/image-map.js` and `dist/js/style.css` alongside source changes. These are served directly by Statamic and are not built by the consuming site.

## Versioning

- **Statamic 4 and 5 (Vue 2)**: `^1.x` — current line
- **Statamic 6+ (Vue 3)**: `^2.x` — future, will require Vue 3 migration

Tag releases with `git tag vX.Y.Z && git push origin vX.Y.Z` after building.

## Architecture

This is a Statamic addon that registers a single custom fieldtype (`image_map_editor`).

**PHP:**
- `src/ServiceProvider.php` — registers the fieldtype and publishes `dist/js/image-map.js` and `dist/js/style.css` to the consuming site's `public/vendor/imagemap/`
- `src/Fieldtypes/ImageMapEditor.php` — fieldtype definition with two config options: `container` (asset container) and `collections` (which collections to link polygons to). Default value: `{ images: [], entries: [], items: [] }`

**JavaScript (`src/resources/js/`):**
- `image-map.js` — entry point; registers `image_map_editor-fieldtype` and `svg-edit` components with Statamic/Vue
- `components/fieldtypes/ImageMapEditor.vue` — main fieldtype component. Manages image selection (via `assets-fieldtype`), entry selection (via `relationship-fieldtype`), and coordinates between them. Uses `publish-field-meta` for both fields. Calls `cp_url('assets-fieldtype')` and `cp_url('fields/field-meta')` to resolve asset and entry metadata.
- `components/SvgEdit.vue` — the SVG drawing canvas. Handles polygon drawing (click to add points), vertex dragging, shift+click to delete vertices, wheel zoom, zoom-to-selection, and pan. Emits `polygon-updated` and `zoom-updated`.
- `lib/geometry.js` — geometry utilities for point-line intersection (used for inserting vertices on polygon edges)
- `lib/point.js` — Point class

**Build:**
- Vite + `@vitejs/plugin-vue2` compiles Vue 2 SFCs into a single IIFE at `dist/js/image-map.js`
- Vue is externalized and mapped to `window.Vue` (provided by Statamic's CP)
- CSS extracted to `dist/js/style.css`

**Data structure stored per field:**
```json
{
    "images": ["asset-id"],
    "entries": ["entry-id"],
    "items": [
        {
            "entryId": "entry-id",
            "assetId": "asset-id",
            "label": "Entry title",
            "polygon": "x1,y1 x2,y2 x3,y3"
        }
    ]
}
```

## Installing on a new site

Add to the site's `composer.json`:
```json
"repositories": [
    { "type": "vcs", "url": "https://github.com/EdisonReklamebyraa/edgebranding-imagemap" }
],
"require": {
    "edgebranding/imagemap": "^1.0"
}
```
Then run `composer require edgebranding/imagemap:^1.0`.
