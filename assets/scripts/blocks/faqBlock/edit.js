import { h3Icon, h4Icon, h5Icon, h6Icon, pIcon } from '../utils/icons';
import GutenPlusFontSizePicker from '../../components/GutenPlusFontSizePicker';
import GutenPlusColorPicker from '../../components/GutenPlusColorPicker';

const { RichText, BlockControls, InspectorControls } = wp.editor;
const { InnerBlocks } = wp.blockEditor;
const { Fragment } = wp.element;
const { DropdownMenu } = wp.components;
const { useSelect } = wp.data;

/**
 * Edit function for FAQ block's Gutenberg Block Editor functionality
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

  /**
   * Component's attribute set functions
   */
  function headingUpdate(heading) {
    setAttributes({ heading: heading });
  }

  function headingTextColorCallback(headingTextColor) {
    setAttributes({ headingTextColor: headingTextColor });
  }

  function headingBgColorCallback(headingBgColor) {
    setAttributes({ headingBgColor: headingBgColor });
  }

  function handleFontPickerCallback(fontPickerData) {
    setAttributes({ headingTextSize: fontPickerData });
  }

  /**
   * Toolbar options for selecting heading HTML tag
   */
  const tagOptions = [
    {
      icon: h3Icon,
      title: 'Heading 3 tag',
      isActive: attributes.headingTag === 'h3',
      onClick: () => setAttributes( { headingTag: 'h3' } ),
    },
    {
      icon: h4Icon,
      title: 'Heading 4 tag',
      isActive: attributes.headingTag === 'h4',
      onClick: () => setAttributes( { headingTag: 'h4' } ),
    },
    {
      icon: h5Icon,
      title: 'Heading 5 tag',
      isActive: attributes.headingTag === 'h5',
      onClick: () => setAttributes( { headingTag: 'h5' } ),
    },
    {
      icon: h6Icon,
      title: 'Heading 6 tag',
      isActive: attributes.headingTag === 'h6',
      onClick: () => setAttributes( { headingTag: 'h6' } ),
    },
    {
      icon: pIcon,
      title: 'Paragraph tag',
      isActive: attributes.headingTag === 'p',
      onClick: () => setAttributes( { headingTag: 'p' } ),
    },
  ];

  /**
   * Render selected heading tag based on user selection (headingTag attribute)
   * 
   * @param {tag} tag name to render
   */
  function renderTagOptionsIcon(tag) {
    switch(tag) {
      case 'h3':
        return h3Icon;

      case 'h4':
        return h4Icon;

      case 'h5':
        return h5Icon;

      case 'h6':
        return h6Icon;

      case 'p':
        return pIcon;

      default:
        return pIcon;
    }
  }

  return (
    <Fragment>
      <InspectorControls>
        <GutenPlusColorPicker
          title={ 'Color settings' }
          textColor={ attributes.headingTextColor }
          textColorCallback={ headingTextColorCallback }
          textLabel={ 'Text color' }
          bgColor={ attributes.headingBgColor }
          bgColorCallback={ headingBgColorCallback }
          bgLabel={ 'Background color' }
        />
        <GutenPlusFontSizePicker
          title={ 'Typography' }
          selectedFontSize={ attributes.headingTextSize }
          fontSizes={ fontSizes }
          fontPickerCallback={ handleFontPickerCallback }
        />
      </InspectorControls>
      <BlockControls>
        <div className="gutenplus-toolbar">
        <DropdownMenu
            icon={ renderTagOptionsIcon(attributes.headingTag) }
            label="Select a direction"
            controls={ tagOptions }
          />
        </div>
      </BlockControls>
      <div>
        <RichText
          tagName={ attributes.headingTag }
          allowedFormats={ [] }
          placeholder="FAQ heading"
          value={ attributes.heading }
          onChange={ headingUpdate }
          className={ attributes.headingBgColor && "gutenplus-editor-faq-block" }
          style={ {
              fontSize: Number.isInteger(attributes.headingTextSize) && attributes.headingTextSize,
              color: attributes.headingTextColor && attributes.headingTextColor,
              backgroundColor: attributes.headingBgColor && attributes.headingBgColor,
          } }
        />
        <InnerBlocks />
      </div>
    </Fragment>
  );
};