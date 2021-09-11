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

  if (buttonTextColor.color === undefined) {
    buttonTextColor.color = '#222222'
  }

  if (buttonBgColor.color === undefined) {
    buttonBgColor.color = '#ffffff'
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
        <GutenbergPlusFontSizePicker {...props} />
      </InspectorControls>
      <div>
        <div style={ { display: 'flex', justifyContent: 'flex-start' } }>
          <Button 
            isDefault
            style={ {
              height: 'auto',
              color: buttonTextColor.color,
              backgroundColor: buttonBgColor.color,
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
}