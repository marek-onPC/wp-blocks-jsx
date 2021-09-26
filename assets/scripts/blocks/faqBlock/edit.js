import { h3Icon, h4Icon, h5Icon, h6Icon, pIcon } from '../utils/icons';

const { RichText, BlockControls } = wp.editor;
const { InnerBlocks } = wp.blockEditor;
const { Fragment } = wp.element;
const { DropdownMenu } = wp.components;

/**
 * Edit function for FAQ block's Gutenberg Block Editor functionality
 *  
 * @param {props} props to store block's data and attributes
 */
export const edit = (props) => {
  const { attributes, setAttributes } = props;

  function headingUpdate(heading) {
    setAttributes({ heading: heading });
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
      <style>
        {"\
          .gutenberg-plus-toolbar {\
            display: flex;\
            height: 100%;\
            border-right: 1px solid  #1e1e1e;\
            margin: auto;\
          }\
          .gutenberg-plus-toolbar > div {\
            margin: auto;\
          }\
          .dashicon.dashicons {\
            margin: 0 !important;\
          }\
        "}
      </style>
      <BlockControls>
        <div className="gutenberg-plus-toolbar">
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
        />
        <InnerBlocks />
      </div>
    </Fragment>
  );
};