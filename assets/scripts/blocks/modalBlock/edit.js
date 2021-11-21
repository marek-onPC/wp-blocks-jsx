import GutenbergPlusFontSizePicker from '../../components/GutenbergPlusFontSizePicker';
import GutenbergPlusColorPicker from '../../components/GutenbergPlusColorPicker';

const { Button, Toolbar } = wp.components;
const { RichText, InspectorControls, BlockControls } = wp.editor;
const { InnerBlocks } = wp.blockEditor;
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

  /**
   * Setting the theme's custom font sizes
   */
  if (editorFontSizes['editor-font-sizes']) {
    editorFontSizes['editor-font-sizes'].map(function(fontSize) {
      fontSizes.push({
        name: fontSize.name,
        slug: fontSize.slug,
        size: fontSize.size,
      });
    });
  }

  /**
   * Component's attribute set functions
   */
  function buttonTextUpdate(buttonText) {
    setAttributes({ buttonText: buttonText });
  }

  function buttonTextColorCallback(buttonTextColor) {
    setAttributes({ buttonTextColor: buttonTextColor });
  }

  function buttonBgColorCallback(buttonBgColor) {
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
        <GutenbergPlusColorPicker 
          title={ 'Color settings (button)' }
          textColor={ attributes.buttonTextColor }
          textColorCallback={ buttonTextColorCallback }
          textLabel={ 'Text color' }
          bgColor={ attributes.buttonBgColor }
          bgColorCallback={ buttonBgColorCallback }
          bgLabel={ 'Background color' }
        />
        <GutenbergPlusFontSizePicker
          title={ 'Typography' }
          selectedFontSize={ attributes.buttonTextSize }
          fontSizes={ fontSizes }
          fontPickerCallback={ handleFontPickerCallback }
        />
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
              color: attributes.buttonTextColor && attributes.buttonTextColor,
              backgroundColor: attributes.buttonBgColor && attributes.buttonBgColor,
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
              style={ {
                fontSize: Number.isInteger(attributes.buttonTextSize) && attributes.buttonTextSize,
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