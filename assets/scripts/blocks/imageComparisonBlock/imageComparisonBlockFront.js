/**
 * Block apperance applied by JavaScript and slider functinality (image width control)
 */
 export function imageComparisonBlockFront() {
  const imageComparisonBlocks = document.querySelectorAll('.wp-block-gutenplus-image-comparison-block');
  
  /**
   * Apply same height for block container and images within
   */
  imageComparisonBlocks.forEach(imageComparisonBlock => {
    var imageToComparison = imageComparisonBlock.querySelectorAll('.wp-block-gutenplus-image-comparison-block__image > img'),
        comparisonSlider = imageComparisonBlock.querySelector('.wp-block-gutenplus-image-comparison-block__slider'),
        universalWidth = imageToComparison[0].offsetWidth,
        universalHeight,
        clickedEvent = false;

    if (imageToComparison[0].offsetHeight <= imageToComparison[1].offsetHeight) {
      universalHeight = imageToComparison[1].offsetHeight;
    } else {
      universalHeight = imageToComparison[0].offsetHeight;
    }

    imageComparisonBlock.style.height = imageToComparison[0].style.height = imageToComparison[1].style.height = universalHeight + 'px';

    /**
     * Apply initial width for image to compare and initial position for slider 
     */
    imageToComparison[1].style.width = (universalWidth / 2) + 'px';
    comparisonSlider.style.top = (universalHeight / 2) - (comparisonSlider.offsetHeight / 2) + 'px';
    comparisonSlider.style.left = (universalWidth / 2) - (comparisonSlider.offsetWidth / 2) + 'px';

    /**
     * Detect click/touch event
     */
    comparisonSlider.addEventListener('mousedown', (e) => {
      e.preventDefault();
      clickedEvent = true;
    });
    comparisonSlider.addEventListener('touchstart', (e) => {
      e.preventDefault();
      clickedEvent = true;
    });

    window.addEventListener('mouseup', () => {
      clickedEvent = false;
    });
    window.addEventListener('touchend', () => {
      clickedEvent = false;
    });

    /**
     * Change slider's position and image width on slider drag event (click/touch and mouse move)
     */
     imageComparisonBlock.addEventListener('mousemove', (e) => {
      var cursorPositionX = cursorPosition(e, imageComparisonBlock);

      if (clickedEvent == false) {
        return false;
      }

      if (cursorPositionX < 0) {
        cursorPositionX = 0;
      }

      if (cursorPositionX > universalWidth) {
        cursorPositionX = universalWidth;
      }

      sliderPosition(cursorPositionX, imageToComparison[1], comparisonSlider);
    });
    imageComparisonBlock.addEventListener('touchmove', (e) => {
      var cursorPositionX = cursorPosition(e, imageComparisonBlock);

      if (clickedEvent == false) {
        return false;
      }

      if (cursorPositionX < 0) {
        cursorPositionX = 0;
      }

      if (cursorPositionX > universalWidth) {
        cursorPositionX = universalWidth;
      }

      sliderPosition(cursorPositionX, imageToComparison[1], comparisonSlider);
    });
  });
}

/**
 * Detect current mouse position on the image
 * 
 * @param {e} e to pass event data
 * @param {imageContainer} imageContainer target container
 */
function cursorPosition(e, imageContainer) {
  var imageProperties, cursorPositionX = 0;
  
  if (e == e.changedTouches) {
    e = e.changedTouches[0];
  }

  imageProperties = imageContainer.getBoundingClientRect();
  cursorPositionX = e.pageX - imageProperties.left;
  cursorPositionX = cursorPositionX - window.pageXOffset;

  return cursorPositionX;
}

/**
 * Define slider position based on image width
 * 
 * @param {cursorPositionX} cursorPositionX cursor position within container
 * @param {image} image container to change width of
 * @param {slider} slider element to change position of
 */
function sliderPosition(cursorPositionX, image, slider) {
  image.style.width = cursorPositionX + 'px';
  slider.style.left = image.offsetWidth - (slider.offsetWidth / 2) + 'px';
}