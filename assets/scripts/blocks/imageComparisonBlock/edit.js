const { MediaUpload, MediaUploadCheck, MediaPlaceholder, BlockControls, InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { Toolbar, PanelBody, Button } = wp.components;

/**
 * Edit function for Image Comparison block's Gutenberg Block Editor functionality
 *  
 * @param {props} props to store block's data and attributes
 */
export const edit = (props) => {
  const { attributes, setAttributes } = props;

  /**
   * Conditional image box rendering covered by separate functions
   * 
   * @param {openEvent} openEvent to pass event data
   * @param {widthOn} widthOn to define custom container's width
   */
  function imageOnePlaceholder(openEvent, widthOn) {
    if(attributes.imageOne) {
      return (
        <img
          src={ attributes.imageOne.imageSrc }
          onClick={ openEvent }
          className="image"
          style={ widthOn && { width: 'calc(50% - 40px)', margin: '20px' } }
        />
      );
    }
    else {
      return (
        <MediaPlaceholder
          onSelect={ media => { 
            setAttributes({ imageOne: { imageAlt: media.alt, imageSrc: media.url } }); 
          } }
          allowedTypes={ ['image'] }
          multiple={ false }
          labels={ { title: 'Upload' } }
          style={ widthOn && { width: 'calc(50% - 40px)', margin: '20px' } }
        >
        </MediaPlaceholder>
      );
    }
  }

  function imageTwoPlaceholder(openEvent, widthOn) {
    if(attributes.imageTwo) {
      return (
        <img
          src={ attributes.imageTwo.imageSrc }
          onClick={ openEvent }
          className="image"
          style={ widthOn && { width: 'calc(50% - 40px)', margin: '20px' } }
        />
      );
    }
    else {
      return (
        <MediaPlaceholder
          onSelect={ media => { 
            setAttributes({ imageTwo: { imageAlt: media.alt, imageSrc: media.url } });
          } }
          allowedTypes={ ['image'] }
          multiple={ false }
          labels={ { title: 'Upload' } }
          style={ widthOn && { width: 'calc(50% - 40px)', margin: '20px' } }
        >
        </MediaPlaceholder>
      );
    }
  }

  /**
   * Image removal function - reseting image attributes
   */
  function removeImageOne() {
    setAttributes({ imageOne: null });
  }
  function removeImageTwo() {
    setAttributes({ imageTwo: null });
  }

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
      <InspectorControls style={ { marginBottom: '40px' } }>
        <PanelBody title={'Images settings'}>
          <p><strong>Select images to compare:</strong></p>

          <div style={ attributes.imagesPosition == 'initial' ? { display: 'flex', flexDirection: 'column' } : { display: 'flex', flexDirection: 'column-reverse' } }>
            <div
              style={ { display: 'flex', flexDirection: 'column', marginBottom: '20px' } }
            >
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={ media => { 
                    setAttributes({ imageOne: { imageAlt: media.alt, imageSrc: media.url } });
                  } }
                  type="image"
                  render={ ({ open }) => imageOnePlaceholder(open) }
                />
                <Button onClick={ removeImageOne }
                  isLink 
                  isDestructive
                  style={ { margin: 'auto' } }
                >
                Remove image
                </Button>
              </MediaUploadCheck>
            </div>

            <div
              style={ { display: 'flex', flexDirection: 'column', marginBottom: '20px' } }
            >
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={ media => { 
                    setAttributes({ imageTwo: { imageAlt: media.alt, imageSrc: media.url } });
                  } }
                  type="image"
                  render={ ({ open }) => imageTwoPlaceholder(open) }
                />
                <Button onClick={ removeImageTwo }
                  isLink 
                  isDestructive
                  style={ { margin: 'auto' } }
                >
                Remove image
                </Button>
              </MediaUploadCheck>
            </div>
          </div>
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <Toolbar controls={ toolbarOptions } />
      </BlockControls>
      <div>
        <div style={ attributes.imagesPosition == 'initial' ? { display: 'flex', flexDirection: 'row' } : { display: 'flex', flexDirection: 'row-reverse' } }>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={ media => { 
                setAttributes({ imageOne: { imageAlt: media.alt, imageSrc: media.url } });
              } }
              type="image"
              render={ ({ open }) => imageOnePlaceholder(open, true) }
            />
          </MediaUploadCheck>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={ media => { 
                setAttributes({ imageTwo: { imageAlt: media.alt, imageSrc: media.url } });
              } }
              type="image"
              render={ ({ open }) => imageTwoPlaceholder(open, true) }
            />
          </MediaUploadCheck>
        </div>
      </div>
    </Fragment>
  );
};
