import loadWpColorPicker from "./admin/loadWpColorPicker";
import pluginAdminColorPalette from "./admin/pluginAdminColorPalette";
import pluginAdminFontSizes from "./admin/pluginAdminFontSizes";
import savePluginOptions from "./admin/savePluginOptions";
import pluginAdminDeleteRow from "./admin/pluginAdminDeleteRow";
import optionAreaEnable from "./admin/optionAreaEnable";
import setNoticeCookie from "./admin/setNoticeCookie";

document.addEventListener('DOMContentLoaded', function () {
  setNoticeCookie();

  if (document.getElementById('blocksplus_admin')) {
    loadWpColorPicker();
    pluginAdminColorPalette();
    pluginAdminFontSizes();
    savePluginOptions();
    pluginAdminDeleteRow();

    const checkboxColorPalette = document.querySelector('input[name="color_palette_enable"]');
    const areaColorPalette = document.getElementById('color_palette_area');
    optionAreaEnable(checkboxColorPalette, areaColorPalette);

    const checkboxFontSizes = document.querySelector('input[name="font_sizes_enable"]');
    const areaFontSizes = document.getElementById('font_sizes_area');
    optionAreaEnable(checkboxFontSizes, areaFontSizes);
  }
});
