const { RichText } = wp.editor;
const { InnerBlocks } = wp.blockEditor;

/**
 * Version [ 1 ] of deprecated block
 */
const v1 = {
  attributes: {
    heading: {
      type: 'string'
    },
    headingTag: {
      type: 'string',
      default: 'p'
    },
    headingTextColor: {
      type: 'string'
    },
    headingBgColor: {
      type: 'string'
    },
    headingTextSize: {
      type: 'number'
    }
  },
  save: (props) => {
    const { attributes } = props;
  
    return (
      <div>
        <RichText.Content
          tagName={attributes.headingTag}
          value={attributes.heading}
          className={`wp-block-blocksplus-faq-block__heading --collapsed ${attributes.headingBgColor != undefined ? "--padding" : ""}`}
          style={{
            fontSize: Number.isInteger(attributes.headingTextSize) != false ? attributes.headingTextSize : null,
            color: attributes.headingTextColor && attributes.headingTextColor,
            backgroundColor: attributes.headingBgColor && attributes.headingBgColor,
          }}
        />
  
        <div className="wp-block-blocksplus-faq-block__content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
};

/**
 * Package of deprecated save functions (old versions) for FAQ block
 */
export var deprecated = [v1];
