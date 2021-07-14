/**
 * On "Save options" buton click save data from inputs to WP table via AJAX call
 */
export default function savePluginOptions() {
  const saveButton = document.getElementById('save_options');

  saveButton.addEventListener('click', function() {
    var colorPaletteOn = document.querySelector('input[name="color_palette_enable"]').checked;
    var colorPalette = document.querySelectorAll('tbody[id="color_palette_table"] tr[id*="id_"]');
    var optionsObject = {};

    colorPalette.forEach((paletteElement, index) => {
      optionsObject[index] = {
        colorName: paletteElement.querySelector('input[name="color_palette_name"]').value,
        colorValue: paletteElement.querySelector('input[name="color_palette_value"]').value
      };
    });

    savePluginOptionsAjax(colorPaletteOn, optionsObject);
  });
}

/**
 * AJAX call function
 */
function savePluginOptionsAjax(settings, object) {
  var spinner = document.getElementById('ajax_spinner');
  var dataToSave = new URLSearchParams();
  dataToSave.append('action', 'savePluginOptions');

  dataToSave.append('colorPalleteOptionOn', settings);

  if (Object.keys(object).length > 0) {
    dataToSave.append('colorPalleteOptions', JSON.stringify(object));
  } else {
    dataToSave.append('colorPalleteOptions', null);
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