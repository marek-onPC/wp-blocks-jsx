import { GutenbergPlusFontSizePicker } from './GutenbergPlusFontSizePicker'

const { Button } = wp.components;
const { RichText, InspectorControls } = wp.editor;
const { InnerBlocks, PanelColorSettings } = wp.blockEditor;
const { Fragment } = wp.element;

export const modalButtonColorSettings = (props) => {
  const { attributes, setAttributes, buttonTextColor, setButtonTextColor, buttonBgColor, setButtonBgColor } = props;

  function buttonTextUpdate(buttonText) {
    setAttributes({ buttonText: buttonText });
  }

  return(
    <Fragment>
      <InspectorControls>
        <PanelColorSettings 
          title="Color settings"
          colorSettings={[
            {
              value: buttonTextColor.color,
              onChange: setButtonTextColor,
              label: "Text color"
            },
            {
              value: buttonBgColor.color,
              onChange: setButtonBgColor,
              label: "Background color"
            },
          ]}
        />
        <GutenbergPlusFontSizePicker/>
      </InspectorControls>
      <div>
        <Button 
          isDefault
          style={ {
            borderRadius: 0,
            boxShadow: 'none',
            color: buttonTextColor.color,
            backgroundColor: buttonBgColor.color
          } }
        >
        <RichText
          allowedFormats={ [] }
          placeholder="Button text"
          value={ attributes.buttonText }
          onChange={ buttonTextUpdate }
        />
      </Button>
      <div
        style={ {  padding: '0 10px' } }
      >
        <InnerBlocks />
      </div>
    </div>
  </Fragment>
	);
}