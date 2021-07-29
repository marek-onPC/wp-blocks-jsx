/**
 * On "Save options" buton click save data from inputs to WP table via AJAX call
 */
export default function savePluginOptions() {
  const saveButton = document.getElementById('save_options');

  if (saveButton) {
    saveButton.addEventListener('click', function() {
      var colorPaletteOn = document.querySelector('input[name="color_palette_enable"]').checked;
      var colorPalette = document.querySelectorAll('tbody[id="color_palette_table"] tr[id*="id_"]');
      var colorPaletteOptionsObject = {};
  
      var fontSizesOn = document.querySelector('input[name="font_sizes_enable"]').checked;
      var fontSizes = document.querySelectorAll('tbody[id="font_sizes_table"] tr[id*="id_"]');
      var fontSizesOptionsObject = {};
  
      colorPalette.forEach((paletteElement, index) => {
        colorPaletteOptionsObject[index] = {
          colorName: paletteElement.querySelector('input[name="color_palette_name"]').value,
          colorValue: paletteElement.querySelector('input[name="color_palette_value"]').value
        };
      });
  
      
      fontSizes.forEach((fontSizeElement, index) => {
        fontSizesOptionsObject[index] = {
          fontName: fontSizeElement.querySelector('input[name="font_size_name"]').value,
          fontSize: fontSizeElement.querySelector('input[name="font_size_value"]').value
        };
      });
  
      savePluginOptionsAjax('colorPallete', colorPaletteOn, colorPaletteOptionsObject);
      savePluginOptionsAjax('fontSizes', fontSizesOn, fontSizesOptionsObject);
    });
  }
}

/**
 * AJAX call function
 */
function savePluginOptionsAjax(type, settings, object) {
  var spinner = document.getElementById('ajax_spinner');
  var dataToSave = new URLSearchParams();
  dataToSave.append('action', 'savePluginOptions');
  dataToSave.append('type', type);
  dataToSave.append(type + 'On', settings);

  if (Object.keys(object).length > 0) {
    dataToSave.append(type, JSON.stringify(object));
  } else {
    dataToSave.append(type, null);
  }

  spinner.style.display = 'inline-block';

  // eslint-disable-next-line
  fetch(gutenberg_plus_ajax, {
    method: 'POST',
    body: dataToSave
  })
  .then(data => {
    console.log('Success:', data);
    spinner.style.display = 'none';
  })
  .catch((error) => {
    console.error('Error:', error);
    spinner.style.display = 'none';
  });
}