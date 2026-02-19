<?php

namespace Edgebranding\Imagemap\Fieldtypes;

use Statamic\Fields\Fieldtype;

class ImageMapEditor extends Fieldtype
{
    protected function configFieldItems(): array
    {
        return [
            'container' => [
                'display' => __('Container'),
                'instructions' => __('statamic::fieldtypes.assets.config.container'),
                'type' => 'asset_container',
                'max_items' => 1,
                'mode' => 'select',
                'width' => 50,
            ],
            'collections' => [
                'display' => __('Collections'),
                'type' => 'collections',
                'mode' => 'select',
            ],
        ];
    }

    /**
     * The blank/default value.
     *
     * @return array
     */
    public function defaultValue()
    {
        return [
            'images' => [],
            'entries' => [],
            'items' => [],
        ];
    }

    /**
     * Pre-process the data before it gets sent to the publish page.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        return $data;
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return $data;
    }
}
