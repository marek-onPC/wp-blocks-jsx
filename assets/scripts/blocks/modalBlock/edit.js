import GutenbergPlusFontSizePicker from '../../components/GutenbergPlusFontSizePicker';

const { Button, Toolbar, PanelBody } = wp.components;
const { RichText, InspectorControls, BlockControls } = wp.editor;
const { InnerBlocks, PanelColorSettings } = wp.blockEditor;
const { Fragment } = wp.element;
const { useSelect } = wp.data;

/**
 * Edit function for Modal block's Gutenberg Block Editor functionality
 *  
 * @param {props} props to store block's data and attributes
 */
export const edit = (props) => {
  const { attributes, setAttributes } = props;
  const editorFontSizes = useSelect(( select ) => {
    return select('core').getThemeSupports();
  });

  var fontSizes = [];

  if (editorFontSizes['editor-font-sizes']) {
    editorFontSizes['editor-font-sizes'].map(function(fontSize) {
      fontSizes.push({
        name: fontSize.name,
        slug: fontSize.slug,
        size: fontSize.size,
      });
    });
  }

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

  function handleFontPickerCallback(fontPickerData) {
    setAttributes({ buttonTextSize: fontPickerData });
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
          title="Button colors"
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
        <PanelBody title={'Button font size'}>
          <GutenbergPlusFontSizePicker 
            selectedFontSize={ attributes.buttonTextSize }
            fontSizes={ fontSizes }
            fontPickerCallback={ handleFontPickerCallback }
          />
        </PanelBody>
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
              boxShadow: 'none',
              padding: '15px 25px'
            } }
          >
            <RichText
              allowedFormats={ [] }
              placeholder="Button text"
              value={ attributes.buttonText }
              onChange={ buttonTextUpdate }
              style={ Number.isInteger(attributes.buttonTextSize) 
              && {
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