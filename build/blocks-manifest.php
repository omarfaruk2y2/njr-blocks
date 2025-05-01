<?php
// This file is generated. Do not modify it manually.
return array(
	'dynamic-slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/njr-dynamic-slider',
		'version' => '0.1.0',
		'title' => 'NJR Dynamic Slider',
		'category' => 'widgets',
		'icon' => 'slides',
		'description' => 'Dynamic Swiper-based slider block.',
		'attributes' => array(
			'slides' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'content' => array(
							'type' => 'string'
						)
					)
				)
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showArrows' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showPagination' => array(
				'type' => 'boolean',
				'default' => true
			),
			'effect' => array(
				'type' => 'string',
				'default' => 'slide'
			),
			'speed' => array(
				'type' => 'number',
				'default' => 500
			),
			'delay' => array(
				'type' => 'number',
				'default' => 3000
			),
			'slideGap' => array(
				'type' => 'number',
				'default' => 16
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false
		),
		'textdomain' => 'njr-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'njr-blocks' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/njr-blocks',
		'version' => '0.1.0',
		'title' => 'Njr Blocks',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'color' => array(
				'background' => false,
				'text' => true
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'njr-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
