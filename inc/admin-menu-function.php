<?php

/**
 * Plugin's menu page definition function.
 */
function gutenbergPlusAdminMenuFunction() {
  $colorPaletteOptionOn = get_option('gutenberg_plus_color_palette_enable');
  $colorPaletteOptions = get_option('gutenberg_plus_color_palette');
  $fontSizesOptionOn = get_option('gutenberg_plus_font_sizes_enable');
  $fontSizesOptions = get_option('gutenberg_plus_font_sizes');
  ?>
  <div class="wrap">
    <h1><?php echo __('Gutenberg Plus', 'gutenberg-plus'); ?></h1>
    <div class="metabox-holder">
      <div class="postbox-container" style="width: 100%">
        <div class="postbox">
          <div class="postbox-header">
            <h2 class="hndle" style="cursor: auto"><?php echo __('Custom Gutenberg\'s color palette', 'gutenberg-plus'); ?></h2>
            <h4 style="margin-right: 15px"><?php echo __('Enable option?', 'gutenberg-plus'); ?></h4>
            <fieldset style="padding-right: 8px">
            <?php if (!empty($colorPaletteOptionOn) && $colorPaletteOptionOn == 'false') : ?>
              <label><input type="checkbox" name="color_palette_enable"></label>
            <?php else : ?>
              <label><input type="checkbox" name="color_palette_enable" checked></label>
            <?php endif; ?>
            </fieldset>
          </div>
          <div id="color_palette_area" class="inside" style="display: <?php echo ($colorPaletteOptionOn == 'false') ? 'none' : 'block'; ?>">
            <table class="form-table">
              <tbody id="color_palette_table">
                <tr>
                  <td><strong>Color name</strong></td>
                  <td><strong>Color value</strong></td>
                </tr>

                <?php if (!empty($colorPaletteOptions)) : 
                  foreach ($colorPaletteOptions as $index => $paletteElement) : ?>
                    <tr id="id_<?php echo rand(pow(10, 2-1), pow(10, 2)-1); ?>">
                      <th scope="row">
                        <input name="color_palette_name" type="text" value="<?php echo $paletteElement->colorName; ?>" style="margin: 0 6px 6px 0"/>
                      </th>
                      <td>
                        <input name="color_palette_value" type="text" value="<?php echo $paletteElement->colorValue; ?>" class="gutenberg-plus-color-palette" data-default-color="#fff" />
                        <?php if ($index != 0) : ?>
                          <button type="button" class="button button-primary button-row-delete" style="background: #dc3545; border: none;">X</button>
                        <?php endif; ?>
                      </td>
                    </tr>

                  <?php endforeach;
                  else : ?>
                    <tr id="id_<?php echo rand(pow(10, 2-1), pow(10, 2)-1); ?>">
                      <th scope="row">
                        <input name="color_palette_name" type="text" value="Primary" style="margin: 0 6px 6px 0"/>
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

      <div class="postbox-container" style="width: 100%">
        <div class="postbox">
          <div class="postbox-header">
            <h2 class="hndle" style="cursor: auto"><?php echo __('Custom Gutenberg\'s font sizes', 'gutenberg-plus'); ?></h2>
            <h4 style="margin-right: 15px"><?php echo __('Enable option?', 'gutenberg-plus'); ?></h4>
            <fieldset style="padding-right: 8px">
            <?php if (!empty($fontSizesOptionOn) && $fontSizesOptionOn == 'false') : ?>
              <label><input type="checkbox" name="font_sizes_enable"></label>
            <?php else : ?>
              <label><input type="checkbox" name="font_sizes_enable" checked></label>
            <?php endif; ?>
            </fieldset>
          </div>
          <div id="font_sizes_area" class="inside" style="display: <?php echo ($fontSizesOptionOn == 'false') ? 'none' : 'block'; ?>">
            <table class="form-table">
              <tbody id="font_sizes_table">
                <tr>
                  <td><strong>Font name</strong></td>
                  <td><strong>Font size</strong></td>
                </tr>

                <?php if (!empty($fontSizesOptions)) : 
                  foreach ($fontSizesOptions as $index => $fontElement) : ?>
                    <tr id="id_<?php echo rand(pow(10, 2-1), pow(10, 2)-1); ?>">
                      <th scope="row">
                        <input name="font_size_name" type="text" value="<?php echo $fontElement->fontName; ?>" style="margin: 0 6px 6px 0"/>
                      </th>
                      <td>
                        <input name="font_size_value" type="number" value="<?php echo $fontElement->fontSize; ?>"/>
                        <?php if ($index != 0) : ?>
                          <button type="button" class="button button-primary button-row-delete" style="background: #dc3545; border: none;">X</button>
                        <?php endif; ?>
                      </td>
                    </tr>

                  <?php endforeach;
                  else : ?>
                    <tr id="id_<?php echo rand(pow(10, 2-1), pow(10, 2)-1); ?>">
                      <th scope="row">
                        <input name="font_size_name" type="text" value="Primary" style="margin: 0 6px 6px 0"/>
                      </th>
                      <td>
                        <input name="font_size_value" type="number" value="18"/>
                      </td>
                    </tr>
                <?php endif; ?>
                
              </tbody>
            </table>
            <button type="button" class="button" id="add_new_font_size">Add new</button>
          </div>
        </div>
      </div>
      <button type="button" class="button button-primary" id="save_options">
        <span class="gutenberg-plus-tooltip --validation">
          Colours and fonts names needs to use <strong>alphabetic characters</strong> only (spaces allowed)
        </span>
        <span class="gutenberg-plus-tooltip --saved">
          <strong>Options saved!</strong>
        </span>
        Save options
      </button>
      <span id="ajax_spinner" style="display: none; margin-top: 5px;"><img src="<?php echo GUTENBERG_PLUS_URL . 'assets/images/spinner.gif'; ?>" alt="Loading spinner"></span>
    </div>
  <?php
}