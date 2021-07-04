<?php

/**
 * Manage plugin's option on activation.
 */
function gutenbergPlusPluginOptions() {
  if (!get_option('gutenberg_plus_color_palette')) {
    add_option('gutenberg_plus_color_palette', '');
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
            <table class="form-table">
              <tbody id="color_palette_table">
                <tr>
                  <td><strong>Color name</strong></td>
                  <td><strong>Color value</strong></td>
                </tr>

                <?php if(!empty(get_option('gutenberg_plus_color_palette'))) : 
                  foreach (get_option('gutenberg_plus_color_palette') as $paletteElement) : ?>
                    <tr id="id_<?php echo rand(pow(10, 2-1), pow(10, 2)-1); ?>">
                      <th scope="row">
                        <input name="color_palette_name" type="text" value="<?php echo $paletteElement->colorName ?>" style="margin: 0 6px 6px 0"/>
                      </th>
                      <td>
                        <input name="color_palette_value" type="text" value="<?php echo $paletteElement->colorValue ?>" class="gutenberg-plus-color-palette" data-default-color="#fff" />
                        <button type="button" class="button button-primary button-row-delete" style="background: #dc3545; border: none;">X</button>
                      </td>
                    </tr>

                  <?php endforeach;
                  else : ?>
                    <tr id="id_<?php echo rand(pow(10, 2-1), pow(10, 2)-1); ?>">
                      <th scope="row">
                        <input name="color_palette_name" type="text" style="margin: 0 6px 6px 0"/>
                      </th>
                      <td>
                        <input name="color_palette_value" type="text" value="#fff" class="gutenberg-plus-color-palette" data-default-color="#fff" />
                      </td>
                    </tr>
                <?php endif; ?>
                
              </tbody>
            </table>
            <button type="button" class="button" id="add_new_color_palette">Add new</button>
          </div>
        </div>
      </div>
      <button type="button" class="button button-primary" id="save_options">Save options</button>
    </div>
  <?php
}