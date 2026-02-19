# Imagemap

A Statamic v4 fieldtype for drawing SVG polygons on images, linking areas to collection entries.

## Requirements

- PHP 8.1+
- Statamic 4.x

## Installation

1. Add the repository to your `composer.json`:

```json
"repositories": [
    {
        "type": "vcs",
        "url": "https://github.com/EdisonReklamebyraa/edgebranding-imagemap"
    }
]
```

2. Require the package:

```bash
composer require edgebranding/imagemap
```

## Usage

The addon registers an `image_map_editor` fieldtype. Add it to a blueprint:

```yaml
fields:
  -
    handle: image_map
    field:
      type: image_map_editor
      container: assets
      collections:
        - buildings
```

**Config options:**

| Option | Description |
|--------|-------------|
| `container` | Asset container to pick images from |
| `collections` | Collections to link polygon areas to |

The field stores data as:

```json
{
    "image": "path/to/image.jpg",
    "entries": [],
    "items": [
        {
            "entryId": "abc123",
            "assetId": "image.jpg",
            "label": "Building A",
            "polygon": "100,200 300,200 300,400 100,400"
        }
    ]
}
```

## Development

To modify the Vue components, install dependencies and build from the addon directory:

```bash
npm install
npm run dev     # development build
npm run watch   # watch for changes
npm run prod    # production build
```

Commit the compiled `dist/js/image-map.js` along with any source changes.
