export function faqBlock() {
  const { registerBlockType } = wp.blocks;
  const { RichText } = wp.editor;
  const { InnerBlocks } = wp.blockEditor;

  registerBlockType('gutenberg-plus/faq', {
    title: 'FAQ',
    description: 'FAQ block with clickable heading and collapsible content',
    icon: 'insert-before',
    category: 'gutenberg-plus',
    attributes: {
      heading: {
        type: 'string'
      }
    },

    edit({ attributes, setAttributes }) {
      function headingUpdate(heading) {
        setAttributes({ heading: heading })
      }

      return (
        <div className="wp-admin-gutenberg-plus-faq">
          <RichText 
            key="editable"
            tagName="h4"
            className="wp-admin-gutenberg-plus-faq__heading"
            placeholder="FAQ heading"
            value={ attributes.heading }
            onChange={ headingUpdate }
          />
          <InnerBlocks />
        </div>
      )
    },

    save({ attributes }) {
      return (
        <div>
          <h4
            className="wp-block-gutenberg-plus-faq__heading --collapsed"
            onClick={ expandFaq }
          >
            { attributes.heading }
          </h4>

          <div className="wp-block-gutenberg-plus-faq__content">
            <InnerBlocks.Content />
          </div>
        </div>
      )
    }
  });
}

export function expandFaq() {
  const faqBlocks = document.querySelectorAll('.wp-block-gutenberg-plus-faq__heading')

  faqBlocks.forEach(faqBlock => {
    faqBlock.nextSibling.style.maxHeight = faqBlock.nextSibling.scrollHeight + 'px';
    
    faqBlock.addEventListener('click', (e) => {

      faqBlocks.forEach(faqBlock => {
        if(e.currentTarget === faqBlock) {
          faqBlock.classList.toggle('--collapsed');
        }
      });

    })
  });
}
