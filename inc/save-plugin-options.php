<?php

/**
 * AJAX callback - save plugin's options.
 */
function savePluginOptions() {
  $dataType = stripslashes($_POST['type']);

  switch ($dataType) {
    case 'colorPallete':
      $colorPalleteOptionOn = json_decode(stripslashes($_POST['colorPalleteOn'])) ? 'true' : 'false';
      $colorPalleteOptions = json_decode(stripslashes($_POST['colorPallete']));
    
      update_option('gutenplus_color_palette_enable', $colorPalleteOptionOn);
      update_option('gutenplus_color_palette', $colorPalleteOptions);
      break;

    case 'fontSizes':
      $fontSizesOptionOn = json_decode(stripslashes($_POST['fontSizesOn'])) ? 'true' : 'false';
      $fontSizesOptions = json_decode(stripslashes($_POST['fontSizes']));
    
      update_option('gutenplus_font_sizes_enable', $fontSizesOptionOn);
      update_option('gutenplus_font_sizes', $fontSizesOptions);
      break;
  }
}
add_action('wp_ajax_savePluginOptions', 'savePluginOptions');