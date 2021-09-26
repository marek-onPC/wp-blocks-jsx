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
        tagName={ attributes.headingTag }
        value={ attributes.heading }
        className="wp-block-gutenberg-plus-faq-block__heading --collapsed"
      />

      <div className="wp-block-gutenberg-plus-faq-block__content">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};