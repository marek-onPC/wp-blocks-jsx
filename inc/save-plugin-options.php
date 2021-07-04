<?php

/**
 * AJAX callback - save plugin's options.
 */
function savePluginOptions() {
  $options = json_decode(stripslashes($_POST['options']));

  update_option('gutenberg_plus_color_palette', $options);
}
add_action('wp_ajax_savePluginOptions', 'savePluginOptions');