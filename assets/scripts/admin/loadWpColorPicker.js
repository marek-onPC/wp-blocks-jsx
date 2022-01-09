/**
 * "Color picker" in plugin's admin page init.
 */
export default function loadWpColorPicker() {
  jQuery(document).ready(function($) {
    $('.gutenplus-color-palette').wpColorPicker();
  });
}