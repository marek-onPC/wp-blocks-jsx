import htmlToElement from "./htmlToElement";
import pluginAdminDeleteRow from "./pluginAdminDeleteRow";

/**
 * Creating new DOM color selector of "color picker" for plugin's color palette functionality.
 */
export default function pluginAdminFontSizes() {
  if (document.getElementById('add_new_font_size')) {
    document.getElementById('add_new_font_size').addEventListener('click', function addNewFontSize() {
      var elementId = 'id_' + (Math.floor(Math.random() * 100));

      var codeBlock = 
      '<tr id=' + elementId + '>' +
        '<th scope="row">' +
          '<input name="font_size_name" type="text" style="margin: 0 6px 0 0"/>' +
        '</th>' +
        '<td>' +
          '<input name="font_size_value" type="number" value=""/>' +
          '<button type="button" class="button button-primary button-row-delete" style="background: #dc3545; border: none;">X</button>' +
        '</td>' +
      '</tr>';

      var domObject = htmlToElement(codeBlock);

      document.getElementById('font_sizes_table').appendChild(domObject);
      pluginAdminDeleteRow();
    });
  }
}