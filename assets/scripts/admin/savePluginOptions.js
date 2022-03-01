import inputValidation from "../admin/inputValidation";

/**
 * On "Save options" buton click save data from inputs to WP table via AJAX call
 */
export default function savePluginOptions() {
  const saveButton = document.getElementById('save_options');

  if (saveButton) {
    saveButton.addEventListener('click', function() {
      if (inputValidation('color_palette_name', /^[a-zA-Z() ]+$/) && inputValidation('font_size_name', /^[a-zA-Z() ]+$/)) {
        var dataToSave = {},
            colorPaletteOn = document.querySelector('input[name="color_palette_enable"]').checked,
            colorPalette = document.querySelectorAll('tbody[id="color_palette_table"] tr[id*="id_"]'),
            colorPaletteOptionsObject = {},
            fontSizesOn = document.querySelector('input[name="font_sizes_enable"]').checked,
            fontSizes = document.querySelectorAll('tbody[id="font_sizes_table"] tr[id*="id_"]'),
            fontSizesOptionsObject = {},
            customSpacingOptionOn = document.querySelector('input[name="custom_spacing_enable"]').checked,
            customBackgroundOptionOn = document.querySelector('input[name="custom_background_enable"]').checked;

        saveButton.classList.remove('--invalid-validation');
    
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

        dataToSave = {
          colorPalette : {
            colorPaletteOn,
            colorPaletteOptionsObject
          },
          fontSizes : {
            fontSizesOn,
            fontSizesOptionsObject
          },
          customOptions : {
            customSpacingOptionOn,
            customBackgroundOptionOn
          }
        };
    
        savePluginOptionsAjax(dataToSave);
      } else {
        saveButton.classList.add('--invalid-validation');

        setTimeout(() => {
          saveButton.classList.remove('--invalid-validation');
        }, 3000);
      }
    });
  }
}

/**
 * AJAX call function
 */
function savePluginOptionsAjax(object) {
  var spinner = document.getElementById('ajax_spinner');
  var dataToSave = new URLSearchParams();

  dataToSave.append('action', 'blocksPlusSavePluginOptions');
  // eslint-disable-next-line
  dataToSave.append('securityCheck', blocksplus_ajax.nonce);

  if (Object.keys(object).length > 0) {
    dataToSave.append('dataToSave', JSON.stringify(object));
  } else {
    dataToSave.append('dataToSave', null);
  }

  spinner.style.display = 'inline-block';

  // eslint-disable-next-line
  fetch(blocksplus_ajax.url, {
    method: 'POST',
    body: dataToSave
  })
  .then(data => {
    console.log('Success:', data);
    spinner.style.display = 'none';

    if (data.status === 403) {
      document.getElementById('save_options').classList.add('--forbidden');

      setTimeout(() => {
        document.getElementById('save_options').classList.remove('--forbidden');
      }, 3000);
    } else {
      document.getElementById('save_options').classList.add('--settings-saved');

      setTimeout(() => {
        document.getElementById('save_options').classList.remove('--settings-saved');
      }, 3000);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    spinner.style.display = 'none';
  });
}