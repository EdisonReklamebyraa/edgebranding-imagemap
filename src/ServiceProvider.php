<?php

namespace Edgebranding\Imagemap;

use Edgebranding\Imagemap\Fieldtypes\ImageMapEditor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $fieldtypes = [
        ImageMapEditor::class,
    ];

    /*protected $stylesheets = [
        __DIR__ . '../dist/css/image-map.css',
    ]*/

    protected $scripts = [
        __DIR__ . '/../dist/js/image-map.js',
    ];
}
