<?php

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

/**
 * Plugin's menu page definition function.
 */
function gutenbergPlusAdminMenuFunction() {
  ?>
  <div class="wrap">
    <h1><?php echo __('Gutenberg Plus', 'gutenberg-plus') ?></h1>
    <div class="metabox-holder">
      <div class="postbox-container" style="width: 100%">
        <div class="postbox">
          <div class="postbox-header">
            <h2 class="hndle" style="cursor: auto"><?php echo __('Custom Gutenberg\'s color palette', 'gutenberg-plus') ?></h2>
          </div>
          <div class="inside">
            <input type="text" value="#fff" class="gutenberg-plus-color-palette" data-default-color="#fff" />
          </div>
        </div>
      </div>

    </div>

  <?php
}