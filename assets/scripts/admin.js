import loadWpColorPicker from "./admin/loadWpColorPicker";
import pluginAdminColorPalette from "./admin/pluginAdminColorPalette";
import savePluginOptions from "./admin/savePluginOptions";
import pluginAdminDeleteRow from "./admin/pluginAdminDeleteRow";

document.addEventListener('DOMContentLoaded', function () {
  loadWpColorPicker();
  pluginAdminColorPalette();
  savePluginOptions();
  pluginAdminDeleteRow();
});
