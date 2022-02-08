const { RichText } = wp.editor;
const { InnerBlocks } = wp.blockEditor;

/**
 * Save function for rendering Modal block on front-end
 *  
 * @param {props} props to access saved data and attributes
 */
 export const save = (props) => {
  const { attributes } = props;

  return (
    <div className="wp-block-blocksplus-modal-block">
      <div
        className="wp-block-blocksplus-modal-block__button-wrapper wp-block-button"
        style={ { justifyContent: attributes.buttonPosition } }
      >
        <RichText.Content
          tagName="a"
          className="wp-block-blocksplus-modal-block__button wp-block-button__link"
          style={ {
            fontSize: Number.isInteger(attributes.buttonTextSize) && attributes.buttonTextSize,
            color: attributes.buttonTextColor,
            backgroundColor: attributes.buttonBgColor
          } }
          value={ attributes.buttonText }
        />
      </div>
      <div className="wp-block-blocksplus-modal-block__modal">
        <div className="wp-block-blocksplus-modal-block__content">
          <span className="wp-block-blocksplus-modal-block__close">&times;</span>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
};
