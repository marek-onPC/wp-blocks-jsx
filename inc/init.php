<?php

/**
 * Manage plugin's option on activation.
 */
function gutenPlusPluginOptions() {
  if (!get_option('gutenplus_color_palette_enable')) {
    add_option('gutenplus_color_palette_enable', 'true');
  }

  if (!get_option('gutenplus_color_palette')) {
    add_option('gutenplus_color_palette', '');
  }

  if (!get_option('gutenplus_font_sizes_enable')) {
    add_option('gutenplus_font_sizes_enable', 'true');
  }

  if (!get_option('gutenplus_font_sizes')) {
    add_option('gutenplus_font_sizes', '');
  }
}
add_action('admin_init', 'gutenPlusPluginOptions');

/**
 * Add new admin panel menu page.
 */
function gutenPlusAdminMenu() {
  add_menu_page(
    'GutenPlus', 
    'GutenPlus', 
    'manage_options', 
    'gutenplus', 
    'gutenPlusAdminMenuFunction', 
    'dashicons-table-col-after', 
    200);
}
add_action('admin_menu','gutenPlusAdminMenu');

include(GUTENPLUS_PATH . 'inc/admin-menu-function.php');