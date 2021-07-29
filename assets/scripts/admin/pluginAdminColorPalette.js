import htmlToElement from "./htmlToElement";
import loadWpColorPicker from "./loadWpColorPicker";
import pluginAdminDeleteRow from "./pluginAdminDeleteRow";

/**
 * Creating new DOM color selector of "color picker" for plugin's color palette functionality.
 */
export default function pluginAdminColorPalette() {
  if (document.getElementById('add_new_color_palette')) {
    document.getElementById('add_new_color_palette').addEventListener('click', function addNewColorPicker() {
      var elementId = 'id_' + (Math.floor(Math.random() * 100));
  
      var codeBlock = 
      '<tr id=' + elementId + '>' +
        '<th scope="row">' +
          '<input name="color_palette_name" type="text" style="margin: 0 6px 6px 0"/>' +
        '</th>' +
        '<td>' +
          '<input name="color_palette_value" type="text" value="#fff" class="gutenberg-plus-color-palette" data-default-color="#fff" />' +
          '<button type="button" class="button button-primary button-row-delete" style="background: #dc3545; border: none;">X</button>' +
        '</td>' +
      '</tr>';
  
      var domObject = htmlToElement(codeBlock);
  
      document.getElementById('color_palette_table').appendChild(domObject);
      loadWpColorPicker();
      pluginAdminDeleteRow();
    });
  }
}