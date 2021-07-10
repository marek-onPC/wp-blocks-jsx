/**
 * Showing or hiding option area based on checkbox area's value
 * 
 * @param {checkbox} checkbox input DOM element (whole element)
 * @param {area} area DOM which will be shown or hidden
 */
 export default function optionAreaEnable(checkbox, area) {
  checkbox.addEventListener('change', function() {
    if (checkbox.checked !== true) {
      area.style.display = 'none';
      return;
    }
  
    area.style.display = 'block';
    return;
  });
}