<?php 

/**
 * Register plugin's main style (for admin panel) and script (for admin panel and front-end functionality).
 */
function gutenPlusMainScriptAndStyle() {
  wp_enqueue_style(
    'gutenplus-style',
    GUTENPLUS_URL . 'dist/styles/main.css',
    array(),
    '1.0.0',
    'all'
  );

  wp_enqueue_script(
    'gutenplus-script',
    GUTENPLUS_URL . 'dist/scripts/main.js',
    array(
      'wp-blocks',
      'wp-editor',
      'wp-block-editor',
      'wp-element',
      'wp-components'
    )
  );

  wp_enqueue_style('dashicons');
};
add_action('wp_enqueue_scripts', 'gutenPlusMainScriptAndStyle');
add_action('admin_enqueue_scripts', 'gutenPlusMainScriptAndStyle');

/**
 * Register plugin's admin style (for dashboard and block's editor styling)
 */
function gutenPlusEditorStyle() {
  wp_enqueue_style(
    'gutenplus-admin',
    GUTENPLUS_URL . 'dist/styles/admin.css',
    array(),
    '1.0.0',
    'all'
  );
};
add_action('admin_enqueue_scripts', 'gutenPlusEditorStyle');

/**
 * Register new blocks in Gutenberg Editor.
 */
function gutenPlusBlocksRegistration() {
  register_block_type( 'gutenplus/faq-block', array(
    'editor_script' => 'gutenplus-script'
  ));
  register_block_type( 'gutenplus/image-comparison-block', array(
    'editor_script' => 'gutenplus-script'
  ));
  register_block_type( 'gutenplus/modal-block', array(
    'editor_script' => 'gutenplus-script'
  ));
};
add_action('init', 'gutenPlusBlocksRegistration');

/**
 * Register new blocks category.
 */
function gutenPlusBlocksCategory($categories) {
  return array_merge(
    $categories,
    array(
      array(
        'slug'  => 'gutenplus',
        'title' => 'GutenPlus',
        'icon'  => null,
      ),
    )
  );
}
add_filter('block_categories', 'gutenPlusBlocksCategory');

/**
 * Register "color picker" style used on admin page.
 */
function gutenPlusAdminScript() {

  wp_enqueue_style('wp-color-picker');
  wp_enqueue_script('wp-color-picker');
  wp_enqueue_script(
    'gutenplus-admin-script',
    GUTENPLUS_URL . 'dist/scripts/admin.js',
    array()
  );

  wp_localize_script(
    'gutenplus-admin-script',
    'gutenplus_ajax',
    admin_url('admin-ajax.php')
  );
}
add_action('admin_enqueue_scripts', 'gutenPlusAdminScript');
