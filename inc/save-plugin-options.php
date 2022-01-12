<?php

/**
 * AJAX callback - save plugin's options.
 */
function blocksPlusSavePluginOptions() {
  $dataType = stripslashes(
    sanitize_text_field(
      $_POST['type']
    )
  );

  switch ($dataType) {
    case 'colorPallete':
      $colorPalleteOptionOn = json_decode(
        stripslashes(
          sanitize_text_field(
            $_POST['colorPalleteOn']
          )
        )
      ) ? 'true' : 'false';
      $colorPalleteOptions = json_decode(
        stripslashes(
          sanitize_text_field(
            $_POST['colorPallete']
          )
        )
      );
    
      update_option('blocksplus_color_palette_enable', $colorPalleteOptionOn);
      update_option('blocksplus_color_palette', $colorPalleteOptions);
      break;

    case 'fontSizes':
      $fontSizesOptionOn = json_decode(
        stripslashes(
          sanitize_text_field(
            $_POST['fontSizesOn']
          )
        )
      ) ? 'true' : 'false';
      $fontSizesOptions = json_decode(
        stripslashes(
          sanitize_text_field(
            $_POST['fontSizes']
          )
        )
      );
    
      update_option('blocksplus_font_sizes_enable', $fontSizesOptionOn);
      update_option('blocksplus_font_sizes', $fontSizesOptions);
      break;
  }
}
add_action('wp_ajax_blocksPlusSavePluginOptions', 'blocksPlusSavePluginOptions');