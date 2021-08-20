export function imageComparisonBlock() {
  const { registerBlockType } = wp.blocks;
  const { MediaUpload, MediaUploadCheck, MediaPlaceholder, BlockControls  } = wp.editor;
  const { Fragment } = wp.element;
  const { Toolbar } = wp.components;

  /**
   * Register new block - Image Comparison
   */
  registerBlockType('gutenberg-plus/image-comparison-block', {
    title: 'Image Comparison',
    description: 'Image Comparison block with slider option to compare images',
    icon: 'format-gallery',
    category: 'gutenberg-plus',
    attributes: {
      imageOne: {
        imageAlt: {
          attribute: 'alt',
          selector: '.image'
        },
        imageSrc: {
          attribute: 'src',
          selector: '.image'
        }
      },
      imageTwo: {
        imageAlt: {
          attribute: 'alt',
          selector: '.image'
        },
        imageSrc: {
          attribute: 'src',
          selector: '.image'
        }
      },
      imagesPosition: {
        type: 'string',
        default: 'initial',
      },
    },

    edit({ attributes, setAttributes }) {
      /**
       * Conditional image box rendering covered by separate functions
       */
      function imageOnePlaceholder(openEvent) {
        if(attributes.imageOne) {
          return (
            <img
              src={ attributes.imageOne.imageSrc }
              onClick={ openEvent }
              className="image"
              style={ { width: 'calc(50% - 40px)', margin: '20px' } }
            />
          );
        }
        else {
          return (
            <MediaPlaceholder
              onSelect={ media => { setAttributes({ imageOne: { imageAlt: media.alt, imageSrc: media.url } }) } }
              allowedTypes={ ['image'] }
              multiple={ false }
              labels={ { title: 'Upload' } }
              style={ { width: 'calc(50% - 40px)', margin: '20px' } }
            >
            </MediaPlaceholder>
          );
        }
      };

      function imageTwoPlaceholder(openEvent) {
        if(attributes.imageTwo) {
          return (
            <img
              src={ attributes.imageTwo.imageSrc }
              onClick={ openEvent }
              className="image"
              style={ { width: 'calc(50% - 40px)', margin: '20px' } }
            />
          );
        }
        else {
          return (
            <MediaPlaceholder
              onSelect={ media => { setAttributes({ imageTwo: { imageAlt: media.alt, imageSrc: media.url } }) } }
              allowedTypes={ ['image'] }
              multiple={ false }
              labels={ { title: 'Upload' } }
              style={ { width: 'calc(50% - 40px)', margin: '20px' } }
            >
            </MediaPlaceholder>
          );
        }
      };

      /**
       * Toolbar options for image position selection in Gutenberg Editor
       */
      const toolbarOptions = [
        {
          icon: 'align-pull-left',
          title: 'Initial positions',
          isActive: attributes.imagesPosition === 'initial',
          onClick: () => setAttributes( { imagesPosition: 'initial' } ),
        },
        {
          icon: 'align-pull-right',
          title: 'Reverse positions',
          isActive: attributes.imagesPosition === 'reverse',
          onClick: () => setAttributes( { imagesPosition: 'reverse' } ),
        },
      ];

      return (
        <Fragment>
          <BlockControls>
            <Toolbar controls={ toolbarOptions } />
          </BlockControls>
          <div>
            <div style={ attributes.imagesPosition == 'initial' ? { display: 'flex', flexDirection: 'row' } : { display: 'flex', flexDirection: 'row-reverse' } }>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={ media => { setAttributes({ imageOne: { imageAlt: media.alt, imageSrc: media.url } }) } }
                  type="image"
                  render={ ({ open }) => imageOnePlaceholder(open) }
                />
              </MediaUploadCheck>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={ media => { setAttributes({ imageTwo: { imageAlt: media.alt, imageSrc: media.url } }) } }
                  type="image"
                  render={ ({ open }) => imageTwoPlaceholder(open) }
                />
              </MediaUploadCheck>
            </div>
          </div>
        </Fragment>
      )
    },

    save({ attributes }) {
      return (
        <div style={ attributes.imagesPosition == 'initial' ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' } }>
          <div className="wp-block-gutenberg-plus-image-comparison-block__image">
            <img
              src={ attributes.imageOne.imageSrc }
            />
          </div>
          <div class="wp-block-gutenberg-plus-image-comparison-block__slider"></div>
          <div className="wp-block-gutenberg-plus-image-comparison-block__image">
            <img
              src={ attributes.imageTwo.imageSrc }
            />
          </div>
        </div>
      )
    }
  })
}

/**
 * Block apperance applied by JavaScript and slider functinality (image width control)
 */
 export function imageComparisonBlockFront() {
  const imageComparisonBlocks = document.querySelectorAll('.wp-block-gutenberg-plus-image-comparison-block');
  
  /**
   * Apply same height for block container and images within
   */
  imageComparisonBlocks.forEach(imageComparisonBlock => {
    var imageToComparison = imageComparisonBlock.querySelectorAll('.wp-block-gutenberg-plus-image-comparison-block__image > img'),
        comparisonSlider = imageComparisonBlock.querySelector('.wp-block-gutenberg-plus-image-comparison-block__slider'),
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

    window.addEventListener('mouseup', (e) => {
      clickedEvent = false;
    });
    window.addEventListener('touchend', (e) => {
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
 */
function cursorPosition(e, imageContainer) {
  var imageProperties, cursorPositionX = 0;
  
  if (e == e.changedTouches) {
    e = e.changedTouches[0];
  } else {
    e = e;
  }

  imageProperties = imageContainer.getBoundingClientRect();
  cursorPositionX = e.pageX - imageProperties.left;
  cursorPositionX = cursorPositionX - window.pageXOffset;

  return cursorPositionX;
}

/**
 * Define slider position based on image width
 */
function sliderPosition(cursorPositionX, image, slider) {
  image.style.width = cursorPositionX + 'px';
  slider.style.left = image.offsetWidth - (slider.offsetWidth / 2) + 'px';
}