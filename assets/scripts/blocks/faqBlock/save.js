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
    {console.log(attributes.headingBgColor)}
      <RichText.Content
        tagName={ attributes.headingTag }
        value={ attributes.heading }
        className={ `wp-block-gutenplus-faq-block__heading --collapsed ${ attributes.headingBgColor != undefined ? "--padding" : "" }` }
        style={ {
            fontSize: Number.isInteger(attributes.headingTextSize) != false ? attributes.headingTextSize : null,
            color: attributes.headingTextColor && attributes.headingTextColor,
            backgroundColor: attributes.headingBgColor && attributes.headingBgColor,
        } }
      />

      <div className="wp-block-gutenplus-faq-block__content">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};