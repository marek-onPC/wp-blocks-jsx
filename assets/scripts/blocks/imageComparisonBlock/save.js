/**
 * Save function for rendering Image Comparison block on front-end
 *  
 * @param {props} props to access saved data and attributes
 */
export const save = (props) => {
  const { attributes } = props;

  return (
    <div>
      <div className="wp-block-blocksplus-image-comparison-block__image">
        <img
          src={attributes.imagesPosition == 'initial' ? attributes.imageTwo.imageSrc : attributes.imageOne.imageSrc}
        />
      </div>
      <div className="wp-block-blocksplus-image-comparison-block__slider" style={{ opacity: attributes.sliderOpacity }}>
        <div className="wp-block-blocksplus-image-comparison-block__slider-line" style={{ backgroundColor: attributes.sliderColor }}></div>
        <div className="wp-block-blocksplus-image-comparison-block__slider-circle" style={{ backgroundColor: attributes.sliderColor }}></div>
      </div>
      <div className="wp-block-blocksplus-image-comparison-block__image">
        <img
          src={attributes.imagesPosition == 'initial' ? attributes.imageOne.imageSrc : attributes.imageTwo.imageSrc}
        />
      </div>
    </div>
  );
};