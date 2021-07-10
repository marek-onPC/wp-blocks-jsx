<?php

/**
 * Manage plugin's option on activation.
 */
function gutenbergPlusPluginOptions() {
  if (!get_option('gutenberg_plus_color_palette')) {
    add_option('gutenberg_plus_color_palette', '');
  }
  
  if (!get_option('gutenberg_plus_color_palette_enable')) {
    add_option('gutenberg_plus_color_palette_enable', 'true');
  }
}
add_action('admin_init', 'gutenbergPlusPluginOptions');

/**
 * Add new admin panel menu page.
 */
function gutenbergPlusAdminMenu() {
  add_menu_page(
    'Gutenberg Plus', 
    'Gutenberg Plus', 
    'manage_options', 
    'gutenberg_plus', 
    'gutenbergPlusAdminMenuFunction', 
    'dashicons-table-col-after', 
    200);
}
add_action('admin_menu','gutenbergPlusAdminMenu');

include(GUTENBERG_PLUS_PATH . 'inc/admin-menu-function.php');