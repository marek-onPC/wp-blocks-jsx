import loadWpColorPicker from "./admin/loadWpColorPicker";
import pluginAdminColorPalette from "./admin/pluginAdminColorPalette";
import savePluginOptions from "./admin/savePluginOptions";
import pluginAdminDeleteRow from "./admin/pluginAdminDeleteRow";
import optionAreaEnable from "./admin/optionAreaEnable";

document.addEventListener('DOMContentLoaded', function () {
  loadWpColorPicker();
  pluginAdminColorPalette();
  savePluginOptions();
  pluginAdminDeleteRow();

  const checkboxColorPalette = document.querySelector('input[name="color_palette_enable"]');
  const areaColorPalette = document.getElementById('color_palette_area');
  optionAreaEnable(checkboxColorPalette, areaColorPalette);
});
