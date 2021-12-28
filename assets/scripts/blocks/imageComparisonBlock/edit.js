const { MediaUpload, MediaUploadCheck, MediaPlaceholder, BlockControls, InspectorControls, ColorPalette } = wp.editor;
const { Fragment } = wp.element;
const { Toolbar, PanelBody, Button, RangeControl, ColorIndicator } = wp.components;

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
          className={ `image ${ widthOn != undefined ? "gutenberg-plus-editor-image-comparison-block__half-width" : "" }` }
        />
      );
    }
    else {
      return (
        <div
          className={ `${ widthOn != undefined ? "gutenberg-plus-editor-image-comparison-block__half-width" : "" }` }
        >
          <MediaPlaceholder
            onSelect={ media => { 
              setAttributes({ imageOne: { imageAlt: media.alt, imageSrc: media.url } }); 
            } }
            allowedTypes={ ['image'] }
            multiple={ false }
            labels={ { title: 'Upload' } }
          >
          </MediaPlaceholder>
        </div>
      );
    }
  }

  function imageTwoPlaceholder(openEvent, widthOn) {
    if(attributes.imageTwo) {
      return (
        <img
          src={ attributes.imageTwo.imageSrc }
          onClick={ openEvent }
          className={ `image ${ widthOn != undefined ? "gutenberg-plus-editor-image-comparison-block__half-width" : "" }` }
        />
      );
    }
    else {
      return (
        <div
          className={ `${ widthOn != undefined ? "gutenberg-plus-editor-image-comparison-block__half-width" : "" }` }
        >
          <MediaPlaceholder
            onSelect={ media => { 
              setAttributes({ imageTwo: { imageAlt: media.alt, imageSrc: media.url } });
            } }
            allowedTypes={ ['image'] }
            multiple={ false }
            labels={ { title: 'Upload' } }
          >
          </MediaPlaceholder>
        </div>
      );
    }
  }

  /**
   * Component's attribute set functions
   */
  function sliderColorUpdate(newSliderColor) {
    setAttributes({ sliderColor: newSliderColor });
  }

  function sliderOpacityUpdate(newSliderOpacity) {
    setAttributes({ sliderOpacity: newSliderOpacity });
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
      <InspectorControls className="gutenberg-plus-editor-image-comparison-block__inspector">
        <PanelBody title={'Images settings'}>
          <p><strong>Select images to compare:</strong></p>

          <div 
            className={ `gutenberg-plus-editor-image-comparison-block__sidebar-images ${ attributes.imagesPosition != 'initial' ? "--reverse" : "" }` }
          >
            <div className="gutenberg-plus-editor-image-comparison-block__sidebar-image">
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
                  className="gutenberg-plus-editor-image-comparison-block__sidebar-remove"
                >
                Remove image
                </Button>
              </MediaUploadCheck>
            </div>

            <div className="gutenberg-plus-editor-image-comparison-block__sidebar-image">
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
                  className="gutenberg-plus-editor-image-comparison-block__sidebar-remove"
                >
                Remove image
                </Button>
              </MediaUploadCheck>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={'Color settings'}>
          <p>Select a Slider color: <ColorIndicator colorValue={ attributes.sliderColor }/></p>
          <ColorPalette
            value={ attributes.sliderColor }
            onChange={ sliderColorUpdate } 
          />
        </PanelBody>
        <PanelBody title={'Opacity settings'}>
          <p>Select a Slider opacity:</p>
          <RangeControl
              value={ attributes.sliderOpacity }
              onChange={ sliderOpacityUpdate }
              min={ 0 }
              max={ 1 }
              step={ 0.05 }
          />
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <Toolbar controls={ toolbarOptions } />
      </BlockControls>
      <div>
        <div
          className={ `gutenberg-plus-editor-image-comparison-block__images ${ attributes.imagesPosition != 'initial' ? "--reverse" : "" }` }
        >
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
