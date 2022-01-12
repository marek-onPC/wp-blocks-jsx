<?php
include(BLOCKSPLUS_PATH . 'inc/admin-menu-function.php');

/**
 * Manage plugin's option on activation.
 */
function blocksPlusPluginOptions() {
  if (!get_option('blocksplus_color_palette_enable')) {
    add_option('blocksplus_color_palette_enable', 'true');
  }

  if (!get_option('blocksplus_color_palette')) {
    add_option('blocksplus_color_palette', '');
  }

  if (!get_option('blocksplus_font_sizes_enable')) {
    add_option('blocksplus_font_sizes_enable', 'true');
  }

  if (!get_option('blocksplus_font_sizes')) {
    add_option('blocksplus_font_sizes', '');
  }
}
add_action('admin_init', 'blocksPlusPluginOptions');

/**
 * Add new admin panel menu page.
 */
function blocksPlusAdminMenu() {
  add_menu_page(
    'BlocksPlus', 
    'BlocksPlus', 
    'manage_options', 
    'blocksplus', 
    'blocksPlusAdminMenuFunction', 
    'dashicons-table-col-after', 
    200);
}
add_action('admin_menu','blocksPlusAdminMenu');
