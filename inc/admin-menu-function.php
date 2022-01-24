<?php

/**
 * Plugin's menu page definition function.
 */
function blocksPlusAdminMenuFunction() {
  $colorPaletteOptionOn = get_option('blocksplus_color_palette_enable');
  $colorPaletteOptions = get_option('blocksplus_color_palette');
  $fontSizesOptionOn = get_option('blocksplus_font_sizes_enable');
  $fontSizesOptions = get_option('blocksplus_font_sizes');
  $customLineHeightOptionOn = get_option('blocksplus_custom_line_height_enable');
  $customSpacingOptionOn = get_option('blocksplus_custom_spacing_enable');
  $customBackgroundOptionOn = get_option('blocksplus_custom_background_enable');
  ?>

  <div class="wrap" id="blocksplus_admin">
    <h1><?php esc_html_e('BlocksPlus', 'blocksplus'); ?></h1>
    <div class="metabox-holder">
      <div class="postbox-container" style="width: 100%">
        <div class="postbox">
          <div class="postbox-header">
            <h2 class="hndle" style="cursor: auto"><?php esc_html_e('Custom Editors\'s color palette', 'blocksplus'); ?></h2>
            <h4 style="margin-right: 15px"><?php esc_html_e('Enable option?', 'blocksplus'); ?></h4>
            <fieldset style="padding-right: 8px">
            <?php if (!empty($colorPaletteOptionOn) && $colorPaletteOptionOn == 'false') : ?>
              <label><input type="checkbox" name="color_palette_enable"></label>
            <?php else : ?>
              <label><input type="checkbox" name="color_palette_enable" checked></label>
            <?php endif; ?>
            </fieldset>
          </div>
          <div id="color_palette_area" class="inside" style="display: <?php echo ($colorPaletteOptionOn == 'false') ? esc_html('none') : esc_html('block'); ?>">
            <table class="form-table">
              <tbody id="color_palette_table">
                <tr>
                  <td><strong><?php esc_html_e('Color name', 'blocksplus'); ?></strong></td>
                  <td><strong><?php esc_html_e('Color value', 'blocksplus'); ?></strong></td>
                </tr>

                <?php if (!empty($colorPaletteOptions)) : 
                  foreach ($colorPaletteOptions as $index => $paletteElement) : ?>
                    <tr id="id_<?php echo esc_attr(rand(pow(10, 2-1), pow(10, 2)-1)); ?>">
                      <th scope="row">
                        <input name="color_palette_name" type="text" value="<?php echo esc_attr($paletteElement->colorName); ?>" style="margin: 0 6px 6px 0"/>
                      </th>
                      <td>
                        <input name="color_palette_value" type="text" value="<?php echo esc_attr($paletteElement->colorValue); ?>" class="blocksplus-color-palette" data-default-color="#fff" />
                        <?php if ($index != 0) : ?>
                          <button type="button" class="button button-primary button-row-delete" style="background: #dc3545; border: none;"><?php echo esc_html('X'); ?></button>
                        <?php endif; ?>
                      </td>
                    </tr>

                  <?php endforeach;
                  else : ?>
                    <tr id="id_<?php echo esc_attr(rand(pow(10, 2-1), pow(10, 2)-1)); ?>">
                      <th scope="row">
                        <input name="color_palette_name" type="text" value="Primary" style="margin: 0 6px 6px 0"/>
                      </th>
                      <td>
                        <input name="color_palette_value" type="text" value="#fff" class="blocksplus-color-palette" data-default-color="#fff" />
                      </td>
                    </tr>
                <?php endif; ?>
                
              </tbody>
            </table>
            <button type="button" class="button" id="add_new_color_palette"><?php esc_html_e('Add new', 'blocksplus'); ?></button>
          </div>
        </div>
      </div>

      <div class="postbox-container" style="width: 100%">
        <div class="postbox">
          <div class="postbox-header">
            <h2 class="hndle" style="cursor: auto"><?php esc_html_e('Custom Editors\'s font sizes', 'blocksplus'); ?></h2>
            <h4 style="margin-right: 15px"><?php esc_html_e('Enable option?', 'blocksplus'); ?></h4>
            <fieldset style="padding-right: 8px">
            <?php if (!empty($fontSizesOptionOn) && $fontSizesOptionOn == 'false') : ?>
              <label><input type="checkbox" name="font_sizes_enable"></label>
            <?php else : ?>
              <label><input type="checkbox" name="font_sizes_enable" checked></label>
            <?php endif; ?>
            </fieldset>
          </div>
          <div id="font_sizes_area" class="inside" style="display: <?php echo ($fontSizesOptionOn == 'false') ? esc_html('none') : esc_html('block'); ?>">
            <table class="form-table">
              <tbody id="font_sizes_table">
                <tr>
                  <td><strong><?php esc_html_e('Font name', 'blocksplus'); ?></strong></td>
                  <td><strong><?php esc_html_e('Font size', 'blocksplus'); ?></strong></td>
                </tr>

                <?php if (!empty($fontSizesOptions)) : 
                  foreach ($fontSizesOptions as $index => $fontElement) : ?>
                    <tr id="id_<?php echo esc_attr(rand(pow(10, 2-1), pow(10, 2)-1)); ?>">
                      <th scope="row">
                        <input name="font_size_name" type="text" value="<?php echo esc_attr($fontElement->fontName); ?>" style="margin: 0 6px 0 0"/>
                      </th>
                      <td>
                        <input name="font_size_value" type="number" value="<?php echo esc_attr($fontElement->fontSize); ?>"/>
                        <?php if ($index != 0) : ?>
                          <button type="button" class="button button-primary button-row-delete" style="background: #dc3545; border: none;">X</button>
                        <?php endif; ?>
                      </td>
                    </tr>

                  <?php endforeach;
                  else : ?>
                    <tr id="id_<?php echo esc_attr(rand(pow(10, 2-1), pow(10, 2)-1)); ?>">
                      <th scope="row">
                        <input name="font_size_name" type="text" value="Primary" style="margin: 0 6px 0 0"/>
                      </th>
                      <td>
                        <input name="font_size_value" type="number" value="18"/>
                      </td>
                    </tr>
                <?php endif; ?>
                
              </tbody>
            </table>
            <button type="button" class="button" id="add_new_font_size"><?php esc_html_e('Add new', 'blocksplus'); ?></button>
          </div>
        </div>
      </div>

      <div class="postbox-container" style="width: 100%">
        <div class="postbox">
          <div class="postbox-header">
            <h2 class="hndle" style="cursor: auto"><?php esc_html_e('Custom Editor\'s text line height', 'blocksplus'); ?></h2>
            <h4 style="margin-right: 15px"><?php esc_html_e('Enable option?', 'blocksplus'); ?></h4>
            <fieldset style="padding-right: 8px">
            <?php if (!empty($customLineHeightOptionOn) && $customLineHeightOptionOn == 'false') : ?>
              <label><input type="checkbox" name="custom_line_height_enable"></label>
            <?php else : ?>
              <label><input type="checkbox" name="custom_line_height_enable" checked></label>
            <?php endif; ?>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="postbox-container" style="width: 100%">
        <div class="postbox">
          <div class="postbox-header">
            <h2 class="hndle" style="cursor: auto"><?php esc_html_e('Custom (layout) Blocks\'s spacing', 'blocksplus'); ?></h2>
            <h4 style="margin-right: 15px"><?php esc_html_e('Enable option?', 'blocksplus'); ?></h4>
            <fieldset style="padding-right: 8px">
            <?php if (!empty($customSpacingOptionOn) && $customSpacingOptionOn == 'false') : ?>
              <label><input type="checkbox" name="custom_spacing_enable"></label>
            <?php else : ?>
              <label><input type="checkbox" name="custom_spacing_enable" checked></label>
            <?php endif; ?>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="postbox-container" style="width: 100%">
        <div class="postbox">
          <div class="postbox-header">
            <h2 class="hndle" style="cursor: auto"><?php esc_html_e('Custom site\'s background', 'blocksplus'); ?></h2>
            <h4 style="margin-right: 15px"><?php esc_html_e('Enable option?', 'blocksplus'); ?></h4>
            <fieldset style="padding-right: 8px">
            <?php if (!empty($customBackgroundOptionOn) && $customBackgroundOptionOn == 'false') : ?>
              <label><input type="checkbox" name="custom_background_enable"></label>
            <?php else : ?>
              <label><input type="checkbox" name="custom_background_enable" checked></label>
            <?php endif; ?>
            </fieldset>
          </div>
        </div>
      </div>

      <button type="button" class="button button-primary" id="save_options">
        <span class="blocksplus-tooltip --validation">
          <?php esc_html_e('Colours and fonts names needs to use alphabetic characters only (spaces allowed)', 'blocksplus'); ?>
        </span>
        <span class="blocksplus-tooltip --forbidden">
          <strong><?php esc_html_e('403 Access forbidden!', 'blocksplus'); ?></strong>
        </span>
        <span class="blocksplus-tooltip --saved">
          <strong><?php esc_html_e('Options saved!', 'blocksplus'); ?></strong>
        </span>
        <?php esc_html_e('Save options', 'blocksplus'); ?>
      </button>
      <span id="ajax_spinner" style="display: none; margin-top: 5px;"><img src="<?php echo esc_attr(BLOCKSPLUS_URL . 'assets/images/spinner.gif'); ?>" alt="Loading spinner"></span>
    </div>
  <?php
}