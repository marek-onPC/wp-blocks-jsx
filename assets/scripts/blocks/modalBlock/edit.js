import { GutenbergPlusFontSizePicker } from './GutenbergPlusFontSizePicker';

const { Button, Toolbar } = wp.components;
const { RichText, InspectorControls, BlockControls } = wp.editor;
const { InnerBlocks, PanelColorSettings } = wp.blockEditor;
const { Fragment } = wp.element;

/**
 * Edit function for Modal block's Gutenberg Block Editor functionality
 *  
 * @param {props} props to store block's data and attributes
 */
export const edit = (props) => {
  const { attributes, setAttributes } = props;

  function buttonTextUpdate(buttonText) {
    setAttributes({ buttonText: buttonText });
  }

  function buttonTextColorUpdate(buttonTextColor) {
    setAttributes({ buttonTextColor: buttonTextColor });
  }

  function buttonBgColorUpdate(buttonBgColor) {
    setAttributes({ buttonBgColor: buttonBgColor });
  }

  if (attributes.buttonTextColor === undefined) {
    setAttributes({ buttonTextColor: '#222222' });
  }

  if (attributes.buttonBgColor === undefined) {
    setAttributes({ buttonBgColor: '#ffffff' });
  }

  /**
   * Toolbar options for selecting button's position
   */
  const toolbarOptions = [
    {
      icon: 'align-left',
      title: 'Align button to left',
      isActive: attributes.buttonPosition === 'flex-start',
      onClick: () => setAttributes( { buttonPosition: 'flex-start' } ),
    },
    {
      icon: 'align-center',
      title: 'Align button to center',
      isActive: attributes.buttonPosition === 'center',
      onClick: () => setAttributes( { buttonPosition: 'center' } ),
    },
    {
      icon: 'align-right',
      title: 'Align button to right',
      isActive: attributes.buttonPosition === 'flex-end',
      onClick: () => setAttributes( { buttonPosition: 'flex-end' } ),
    },
  ];

  return(
    <Fragment>
      <InspectorControls>
        <PanelColorSettings 
          title="Color settings"
          colorSettings={[
            {
              value: attributes.buttonTextColor,
              onChange: buttonTextColorUpdate,
              label: "Text color"
            },
            {
              value: attributes.buttonBgColor,
              onChange: buttonBgColorUpdate,
              label: "Background color"
            },
          ]}
        />
        <GutenbergPlusFontSizePicker {...props} />
      </InspectorControls>
      <BlockControls>
        <Toolbar controls={ toolbarOptions } />
      </BlockControls>
      <div>
        <div style={ { display: 'flex', justifyContent: attributes.buttonPosition } }>
          <Button 
            isDefault
            style={ {
              height: 'auto',
              color: attributes.buttonTextColor,
              backgroundColor: attributes.buttonBgColor,
              borderRadius: 0,
              boxShadow: 'none'
            } }
          >
            <RichText
              allowedFormats={ [] }
              placeholder="Button text"
              value={ attributes.buttonText }
              onChange={ buttonTextUpdate }
              style={ {
                fontSize: attributes.buttonTextSize,
              } }
            />
          </Button>
        </div>
        <div
          style={ {  padding: '0 10px' } }
        >
          <InnerBlocks />
        </div>
      </div>
    </Fragment>
	);
};