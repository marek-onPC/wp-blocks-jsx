/**
 * On "Save options" buton click save data from inputs to WP table via AJAX call
 */
export default function savePluginOptions() {
  const saveButton = document.getElementById('save_options');

  saveButton.addEventListener('click', function() {
    var colorPalette = document.querySelectorAll('tr[id*="id_"]');
    var optionsObject = {};

    colorPalette.forEach((paletteElement, index) => {
      optionsObject[index] = {
        colorName: paletteElement.querySelector('input[name="color_palette_name"]').value,
        colorValue: paletteElement.querySelector('input[name="color_palette_value"]').value
      };
    });

    savePluginOptionsAjax(optionsObject);
  });
}

/**
 * AJAX call function
 */
function savePluginOptionsAjax(object) {
  var dataToSave = new URLSearchParams();
  dataToSave.append('action', 'savePluginOptions');

  if (Object.keys(object).length > 0) {
    dataToSave.append('options', JSON.stringify(object));
  } else {
    dataToSave.append('options', null);
  }

  // eslint-disable-next-line
  fetch(gutenberg_plus_ajax, {
    method: 'POST',
    body: dataToSave
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}