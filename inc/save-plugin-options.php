<?php

/**
 * AJAX callback - save plugin's options.
 */
function savePluginOptions() {
  $colorPalleteOptionOn = json_decode(stripslashes($_POST['colorPalleteOptionOn'])) ? 'true' : 'false';
  $colorPalleteOptions = json_decode(stripslashes($_POST['colorPalleteOptions']));

  update_option('gutenberg_plus_color_palette_enable', $colorPalleteOptionOn);
  update_option('gutenberg_plus_color_palette', $colorPalleteOptions);
}
add_action('wp_ajax_savePluginOptions', 'savePluginOptions');