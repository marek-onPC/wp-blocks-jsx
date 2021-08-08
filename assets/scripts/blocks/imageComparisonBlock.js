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