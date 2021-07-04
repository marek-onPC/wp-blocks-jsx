<?php 

/**
 * Register plugin's main style (for admin panel) and script (for admin panel and front-end functionality).
 */
function gutembergPlusMainScriptAndStyle() {
  wp_enqueue_style(
    'gutenberg-plus-style',
    GUTENBERG_PLUS_URL . 'dist/styles/main.css',
    array(),
    '1.0.0',
    'all'
  );

  wp_enqueue_script(
    'gutenberg-plus-script',
    GUTENBERG_PLUS_URL . 'dist/scripts/main.js',
    array()
  );
};
add_action('wp_enqueue_scripts', 'gutembergPlusMainScriptAndStyle');
add_action('admin_enqueue_scripts', 'gutembergPlusMainScriptAndStyle');

/**
 * Register "color picker" style used on admin page.
 */
function gutembergPlusAdminScript() {

  wp_enqueue_style('wp-color-picker');
  wp_enqueue_script('wp-color-picker');
  wp_enqueue_script(
    'gutenberg-plus-admin-script',
    GUTENBERG_PLUS_URL . 'dist/scripts/admin.js',
    array()
  );

  wp_localize_script(
    'gutenberg-plus-admin-script',
    'gutenberg_plus_ajax',
    admin_url('admin-ajax.php')
  );
}
add_action('admin_enqueue_scripts', 'gutembergPlusAdminScript');
