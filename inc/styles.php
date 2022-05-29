<?php 

/**
 * Register plugin's main style (for admin panel) and script (for admin panel and front-end functionality).
 */
function blocksPlusMainScriptAndStyle() {
  wp_enqueue_style(
    'blocksplus-style',
    BLOCKSPLUS_URL . 'dist/styles/main.css',
    array(),
    '1.2.0',
    'all'
  );

  wp_enqueue_script(
    'blocksplus-script',
    BLOCKSPLUS_URL . 'dist/scripts/main.js',
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
add_action('wp_enqueue_scripts', 'blocksPlusMainScriptAndStyle');
add_action('admin_enqueue_scripts', 'blocksPlusMainScriptAndStyle');

/**
 * Register plugin's admin style (for dashboard and block's editor styling)
 */
function blocksPlusEditorStyle() {
  wp_enqueue_style(
    'blocksplus-admin',
    BLOCKSPLUS_URL . 'dist/styles/admin.css',
    array(),
    '1.2.0',
    'all'
  );
};
add_action('admin_enqueue_scripts', 'blocksPlusEditorStyle');

/**
 * Register new blocks in Gutenberg Editor.
 */
function blocksPlusBlocksRegistration() {
  register_block_type( 'blocksplus/faq-block', array(
    'editor_script' => 'blocksplus-script'
  ));
  register_block_type( 'blocksplus/image-comparison-block', array(
    'editor_script' => 'blocksplus-script'
  ));
  register_block_type( 'blocksplus/modal-block', array(
    'editor_script' => 'blocksplus-script'
  ));
  register_block_type( 'blocksplus/social-share-buttons-block', array(
    'editor_script' => 'blocksplus-script'
  ));
};
add_action('init', 'blocksPlusBlocksRegistration');

/**
 * Register new blocks category.
 */
function blocksPlusBlocksCategory($categories) {
  return array_merge(
    $categories,
    array(
      array(
        'slug'  => 'blocksplus',
        'title' => 'BlocksPlus',
        'icon'  => null,
      ),
    )
  );
}
add_filter('block_categories', 'blocksPlusBlocksCategory');

/**
 * Register "color picker" style used on admin page.
 */
function blocksPlusAdminScript() {
  wp_enqueue_style('wp-color-picker');
  wp_enqueue_script('wp-color-picker');
  wp_enqueue_script(
    'blocksplus-admin-script',
    BLOCKSPLUS_URL . 'dist/scripts/admin.js',
    array()
  );

  wp_localize_script(
    'blocksplus-admin-script',
    'blocksplus_ajax',
    array(
      'url' => admin_url('admin-ajax.php'),
      'nonce' => wp_create_nonce('blocksplus-nonce')
    )
  );
}
add_action('admin_enqueue_scripts', 'blocksPlusAdminScript');
