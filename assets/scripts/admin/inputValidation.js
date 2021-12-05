/**
 * Validate selected input value with provided pattern
 * 
 * @param {inputElementToValidate} input DOM element (whole element) to validate (queried by name)
 * @param {validationPattern} pattern used to validate input value
 */
export default function inputValidation(inputElementToValidate, validationPattern) {
  var inputElements = document.querySelectorAll('[name=' + inputElementToValidate + ']'),
      validationState;

  if (inputElements.length > 0) {
    inputElements.forEach(inputElement => {
      if (! validationPattern.test(inputElement.value)) {
        validationState = false;
      }
    });

    if (validationState !== false) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}