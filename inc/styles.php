<?php 

/**
 * Register plugin's main style (for admin panel) and script (for admin panel and front-end functionality).
 */
function gutembergPlusMainScriptAndStyle() {
  wp_enqueue_style(
    'gutenberg-plus-style',
    GUTENBERG_PLUS_URL . 'dist/styles/main.css',
    array(),
    '1.0.0',
    'all'
  );

  wp_enqueue_script(
    'gutenberg-plus-script',
    GUTENBERG_PLUS_URL . 'dist/scripts/main.js',
    array()
  );
};
add_action('wp_enqueue_scripts', 'gutembergPlusMainScriptAndStyle');
add_action('admin_enqueue_scripts', 'gutembergPlusMainScriptAndStyle');

/**
 * Register "color picker" style used on admin page.
 */
function gutembergPlusAdminScript() {

  wp_enqueue_style('wp-color-picker');
  wp_enqueue_script('wp-color-picker');
  wp_enqueue_script(
    'gutenberg-plus-admin-script',
    GUTENBERG_PLUS_URL . 'dist/scripts/admin.js',
    array()
  );

  wp_localize_script(
    'gutenberg-plus-admin-script',
    'gutenberg_plus_ajax',
    admin_url('admin-ajax.php')
  );
}
add_action('admin_enqueue_scripts', 'gutembergPlusAdminScript');

/**
 * Define Gutenberg's Color Palette set of colors
 */
function gutenbergPlusColorPaletteSet() {
  $colorPaletteOptionOn = get_option('gutenberg_plus_color_palette_enable');
  $colorPaletteOptions = get_option('gutenberg_plus_color_palette');

  if ($colorPaletteOptionOn == 'false') {
    return;
  } else {
    if (empty($colorPaletteOptions)) {
      return;
    } else {
      $colorPaletteArray = array();

      foreach ($colorPaletteOptions as $paletteElement) {
        array_push($colorPaletteArray, array(
          'name' => $paletteElement->colorName,
          'slug' => sanitize_title($paletteElement->colorName),
          'color' => $paletteElement->colorValue
        ));
      }
    }
  }

  add_theme_support(
    'editor-color-palette',
    $colorPaletteArray
  );
};
add_action('init', 'gutenbergPlusColorPaletteSet');

/**
 * Define Gutenberg's Font Sizes set of fonts
 */
function gutenbergPlusFontSizesSet() {
  $fontSizesOptionOn = get_option('gutenberg_plus_font_sizes_enable');
  $fontSizesOptions = get_option('gutenberg_plus_font_sizes');

  if ($fontSizesOptionOn == 'false') {
    return;
  } else {
    if (empty($fontSizesOptions)) {
      return;
    } else {
      $fontSizesArray = array();

      foreach ($fontSizesOptions as $fontElement) {
        array_push($fontSizesArray, array(
          'name' => $fontElement->fontName,
          'slug' => sanitize_title($fontElement->fontName),
          'size' => (int)$fontElement->fontSize
        ));
      }
    }
  }

  add_theme_support(
    'editor-font-sizes',
    $fontSizesArray
  );
};
add_action('init', 'gutenbergPlusFontSizesSet');

/**
 * Create and load Gutenberg's Color Palette and Font Sizes styles in <head> tag
 */
function gutenbergPlusFrontEndStyles() {
  $colorPaletteOptionOn = get_option('gutenberg_plus_color_palette_enable');
  $colorPaletteOptions = get_option('gutenberg_plus_color_palette');
  $fontSizesOptionOn = get_option('gutenberg_plus_font_sizes_enable');
  $fontSizesOptions = get_option('gutenberg_plus_font_sizes');


  if ($colorPaletteOptionOn != 'false') {
    if (!empty($colorPaletteOptions)) {
      echo '<style type="text/css" id="gutenberg-plus-color-palette">';
      foreach ($colorPaletteOptions as $paletteElement) {
        echo '
        .has-text-color.has-'.sanitize_title($paletteElement->colorName).'-color { color: '.$paletteElement->colorValue.';}
        .has-background.has-'.sanitize_title($paletteElement->colorName).'-background-color { background-color: '.$paletteElement->colorValue.';}
        ';
      }
      echo '</style>';
    }
  }
  
  if ($fontSizesOptionOn != 'false') {
    if (!empty($fontSizesOptions)) {
      echo '<style type="text/css" id="gutenberg-plus-font-sizes">';
      foreach ($fontSizesOptions as $fontElement) {
        echo '
        .has-'.sanitize_title($fontElement->fontName).'-font-size { font-size: '.(int)$fontElement->fontSize.'px;}
        ';
      }
      echo '</style>';
    }
  }
};
add_action('wp_head', 'gutenbergPlusFrontEndStyles');
