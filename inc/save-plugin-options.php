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
  }
}
add_action('wp_ajax_blocksPlusSavePluginOptions', 'blocksPlusSavePluginOptions');
