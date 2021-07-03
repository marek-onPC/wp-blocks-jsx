import loadWpColorPicker from "./admin/loadWpColorPicker";
import pluginAdminColorPalette from "./admin/pluginAdminColorPalette";

if( document.readyState !== 'loading' ) {
  loadWpColorPicker();
  pluginAdminColorPalette();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    loadWpColorPicker();
    pluginAdminColorPalette();
  });
}