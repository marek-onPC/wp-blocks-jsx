const { Button } = wp.components;
const { RichText } = wp.editor;
const { InnerBlocks } = wp.blockEditor;

/**
 * Version [ 1 ] of deprecated block
 */
const v1 = {
  attributes: {
    buttonText: {
      type: 'string'
    },
    buttonTextSize: {
      type: 'number'
    },
    buttonTextColor: {
      type: 'string'
    },
    buttonBgColor: {
      type: 'string'
    },
    buttonPosition: {
      type: 'string',
      default: 'flex-start'
    }
  },
  save: (props) => {
    const { attributes } = props;

    return (
      <div className="wp-block-blocksplus-modal-block">
        <div
          className="wp-block-blocksplus-modal-block__button-wrapper"
          style={{ justifyContent: attributes.buttonPosition }}
        >
          <Button
            className="wp-block-blocksplus-modal-block__button"
            isDefault
            style={{
              fontSize: Number.isInteger(attributes.buttonTextSize) && attributes.buttonTextSize,
              color: attributes.buttonTextColor,
              backgroundColor: attributes.buttonBgColor
            }}
          >
            <RichText.Content
              value={attributes.buttonText}
            />
          </Button>
        </div>
        <div className="wp-block-blocksplus-modal-block__modal">
          <div className="wp-block-blocksplus-modal-block__content">
            <span className="wp-block-blocksplus-modal-block__close">&times;</span>
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    );
  }
};

/**
 * Package of deprecated save functions (old versions) for Modal block
 */
export var deprecated = [v1];