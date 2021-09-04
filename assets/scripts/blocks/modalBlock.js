export function modalBlock() {
  const { registerBlockType } = wp.blocks;
  const { Button, PanelBody } = wp.components;
  const { RichText, InspectorControls } = wp.editor;
  const { InnerBlocks } = wp.blockEditor;
  const { Fragment } = wp.element;

  /**
   * Register new block - Modal
   */
  registerBlockType('gutenberg-plus/modal-block', {
    title: 'Modal',
    description: 'Modal block with button to open modal with content',
    icon: 'feedback',
    category: 'gutenberg-plus',
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
      }
    },

    edit({ attributes, setAttributes }) {
      function buttonTextUpdate(buttonText) {
        setAttributes({ buttonText: buttonText })
      }

      return (
        <Fragment>
          <InspectorControls style={ { marginBottom: '40px' } }>
            <PanelBody title={'Color settings'}>
              <p><strong>Select colors:</strong></p>

            </PanelBody>
          </InspectorControls>
          <div>
            <Button 
              isDefault
              style={ {
                borderRadius: 0,
                boxShadow: 'none'
              } }
            >
              <RichText
                allowedFormats={ [] }
                placeholder="Button text"
                value={ attributes.button }
                onChange={ buttonTextUpdate }
              />
            </Button>
            <div
              style={ {  padding: '20px' } }
            >
              <InnerBlocks />
            </div>
          </div>
        </Fragment>
      )
    },

    save({ attributes }) {
      return (
        <div>

        </div>
      )
    }
  });
}