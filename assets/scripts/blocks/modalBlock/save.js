const { Button } = wp.components;
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
    <div className="wp-block-gutenberg-plus-modal-block">
      <div style={ { display: 'flex', justifyContent: attributes.buttonPosition } }>
        <Button
          className="wp-block-gutenberg-plus-modal-block__button"
          isDefault
          style={ {
            fontSize: attributes.buttonTextSize,
            color: attributes.buttonTextColor,
            backgroundColor: attributes.buttonBgColor
          },
          Number.isInteger(attributes.buttonTextSize) 
          && {
            fontSize: attributes.buttonTextSize,
          } }
        >
          <RichText.Content
            value={ attributes.buttonText }
          />
        </Button>
      </div>
      <div className="wp-block-gutenberg-plus-modal-block__modal">
        <div className="wp-block-gutenberg-plus-modal-block__content">
          <span className="wp-block-gutenberg-plus-modal-block__close">&times;</span>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
};
