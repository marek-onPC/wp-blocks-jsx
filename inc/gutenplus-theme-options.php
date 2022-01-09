<?php

/**
 * Define Gutenberg's Color Palette set of colors
 */
function gutenPlusColorPaletteSet() {
  $colorPaletteOptionOn = get_option('gutenplus_color_palette_enable');
  $colorPaletteOptions = get_option('gutenplus_color_palette');

  if ($colorPaletteOptionOn == 'false') {
    return;
  } else {
    if (empty($colorPaletteOptions)) {
      return;
    } else {
      $colorPaletteArray = array();

      foreach ($colorPaletteOptions as $paletteElement) {
        array_push($colorPaletteArray, array(
          'name' => sanitize_text_field($paletteElement->colorName),
          'slug' => sanitize_title($paletteElement->colorName),
          'color' => sanitize_text_field($paletteElement->colorValue)
        ));
      }
    }
  }

  add_theme_support(
    'editor-color-palette',
    $colorPaletteArray
  );
};
add_action('init', 'gutenPlusColorPaletteSet');

/**
 * Define Gutenberg's Font Sizes set of fonts
 */
function gutenPlusFontSizesSet() {
  $fontSizesOptionOn = get_option('gutenplus_font_sizes_enable');
  $fontSizesOptions = get_option('gutenplus_font_sizes');

  if ($fontSizesOptionOn == 'false') {
    return;
  } else {
    if (empty($fontSizesOptions)) {
      return;
    } else {
      $fontSizesArray = array();

      foreach ($fontSizesOptions as $fontElement) {
        array_push($fontSizesArray, array(
          'name' => sanitize_text_field($fontElement->fontName),
          'slug' => sanitize_title($fontElement->fontName),
          'size' => sanitize_text_field((int)$fontElement->fontSize)
        ));
      }
    }
  }

  add_theme_support(
    'editor-font-sizes',
    $fontSizesArray
  );
};
add_action('init', 'gutenPlusFontSizesSet');

/**
 * Create and load Gutenberg's Color Palette and Font Sizes styles in <head> tag
 */
function gutenPlusFrontEndStyles() {
  $colorPaletteOptionOn = get_option('gutenplus_color_palette_enable');
  $colorPaletteOptions = get_option('gutenplus_color_palette');
  $fontSizesOptionOn = get_option('gutenplus_font_sizes_enable');
  $fontSizesOptions = get_option('gutenplus_font_sizes');


  if ($colorPaletteOptionOn != 'false') {
    if (!empty($colorPaletteOptions)) {
      echo '<style type="text/css" id="gutenplus-color-palette">';
      foreach ($colorPaletteOptions as $paletteElement) {
        echo '
        .has-text-color.has-'.sanitize_title($paletteElement->colorName).'-color { color: '.esc_html($paletteElement->colorValue).' !important;}
        .has-background.has-'.sanitize_title($paletteElement->colorName).'-background-color { background-color: '.esc_html($paletteElement->colorValue).' !important;}
        ';
      }
      echo '</style>';
    }
  }
  
  if ($fontSizesOptionOn != 'false') {
    if (!empty($fontSizesOptions)) {
      echo '<style type="text/css" id="gutenplus-font-sizes">';
      foreach ($fontSizesOptions as $fontElement) {
        echo '
        .has-'.sanitize_title($fontElement->fontName).'-font-size { font-size: '.esc_html((int)$fontElement->fontSize).'px !important;}
        ';
      }
      echo '</style>';
    }
  }
};
add_action('wp_head', 'gutenPlusFrontEndStyles');
