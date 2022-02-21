<?php

/**
 * AJAX callback - save plugin's options.
 */
function blocksPlusSavePluginOptions() {
  check_ajax_referer('blocksplus-nonce', 'securityCheck');

  if (current_user_can('manage_options')) {
    $dataToSave = json_decode(
      stripslashes(
        sanitize_text_field(
          $_POST['dataToSave']
        )
      )
    );
    
    if (!empty($dataToSave->colorPalette)) {
      $colorPalleteOptionOn = $dataToSave->colorPalette->colorPaletteOn ? 'true' : 'false';
      $colorPalleteOptions = $dataToSave->colorPalette->colorPaletteOptionsObject;
    
      update_option('blocksplus_color_palette_enable', $colorPalleteOptionOn);
      update_option('blocksplus_color_palette', $colorPalleteOptions);
    }

    if (!empty($dataToSave->fontSizes)) {
      $fontSizesOptionOn = $dataToSave->fontSizes->fontSizesOn ? 'true' : 'false';
      $fontSizesOptions = $dataToSave->fontSizes->fontSizesOptionsObject;
    
      update_option('blocksplus_font_sizes_enable', $fontSizesOptionOn);
      update_option('blocksplus_font_sizes', $fontSizesOptions);
    }

    if (!empty($dataToSave->customOptions)) {
      $customLineHeightOptionOn = $dataToSave->customOptions->customLineHeightOptionOn ? 'true' : 'false';
      $customSpacingOptionOn = $dataToSave->customOptions->customSpacingOptionOn ? 'true' : 'false';
      $customBackgroundOptionOn = $dataToSave->customOptions->customBackgroundOptionOn ? 'true' : 'false';
    
      update_option('blocksplus_custom_line_height_enable', $customLineHeightOptionOn);
      update_option('blocksplus_custom_spacing_enable', $customSpacingOptionOn);
      update_option('blocksplus_custom_background_enable', $customBackgroundOptionOn);
    }
  }
}
add_action('wp_ajax_blocksPlusSavePluginOptions', 'blocksPlusSavePluginOptions');