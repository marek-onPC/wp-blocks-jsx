const { FontSizePicker } = wp.components;
const { useSelect } = wp.data;

/**
 * Component to cover Modal block's font size picking functionality
 *  
 * @param {props} props to store block's data and attributes
 */
export const GutenbergPlusFontSizePicker = (props) => {
  const { attributes, setAttributes } = props;
  const fallbackFontSize = 16;
  const editorFontSizes = useSelect(( select ) => {
    return select('core').getThemeSupports();
  });

  var fontSizes = [];
  editorFontSizes['editor-font-sizes'].map(function(fontSize) {
    fontSizes.push({
      name: fontSize.name,
      slug: fontSize.slug,
      size: fontSize.size,
    });
  });

  function buttonTextSize(buttonTextSize) {
    setAttributes({ buttonTextSize: buttonTextSize });
  }

  return (
    <FontSizePicker
      fontSizes={ fontSizes }
      value={ attributes.buttonTextSize }
      fallbackFontSize={ fallbackFontSize }
      onChange={ (newFontSize) => {
        buttonTextSize(newFontSize);
      } }
    />
  );
};
 