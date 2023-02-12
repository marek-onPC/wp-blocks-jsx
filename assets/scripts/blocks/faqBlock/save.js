const { RichText } = wp.editor;
const { InnerBlocks } = wp.blockEditor;

/**
 * Save function for rendering FAQ block on front-end
 *  
 * @param {props} props to access saved data and attributes
 */
export const save = (props) => {
  const { attributes } = props;

  return (
    <div>
      <RichText.Content
        tagName={attributes.headingTag}
        value={attributes.heading}
        className={`wp-block-blocksplus-faq-block__heading --collapsed ${attributes.headingBgColor != undefined ? "--padding" : ""} ${attributes.isHeadingContentSpaceDisabled === true ? "--disable-space" : ""}`}
        style={{
          fontSize: Number.isInteger(attributes.headingTextSize) != false ? attributes.headingTextSize : null,
          color: attributes.headingTextColor && attributes.headingTextColor,
          backgroundColor: attributes.headingBgColor && attributes.headingBgColor,
        }}
      />

      <div className={`wp-block-blocksplus-faq-block__content ${attributes.isHeadingContentSpaceDisabled === true ? "--disable-space" : ""}`}>
        <InnerBlocks.Content />
      </div>
    </div>
  );
};