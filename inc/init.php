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

  if (!get_option('blocksplus_custom_spacing_enable')) {
    add_option('blocksplus_custom_spacing_enable', 'false');
  }

  if (!get_option('blocksplus_custom_background_enable')) {
    add_option('blocksplus_custom_background_enable', 'false');
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

/**
 * Add admin notice box.
 */
function blocksPlusAdminMenuNotice() {
  if (!isset($_COOKIE['blocksplus_notice'])) {
    ?>
      <div class="notice notice-success is-dismissible" id="blocksplus_notice">
        <p><strong><?php _e( 'BlockPlus', 'blocksplus' ); ?></strong></p>
        <p><?php _e( 'Are you using BlockPlus plugin? Something need fixing or have an idea for a new feature?', 'blocksplus' ); ?></p>
        <p><a href="https://wordpress.org/plugins/blocksplus/" target="_blank"><?php _e( 'Share your thoughts with us!', 'blocksplus' ); ?></a></p>
      </div>
    <?php
  }
}
add_action( 'admin_notices', 'blocksPlusAdminMenuNotice' );