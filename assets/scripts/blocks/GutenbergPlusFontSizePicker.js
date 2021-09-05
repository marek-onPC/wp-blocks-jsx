const { FontSizePicker } = wp.components;
const { useState } = wp.element;
const { useSelect } = wp.data;
 
export const GutenbergPlusFontSizePicker = () => {
  const [fontSize, setFontSize] = useState(12);

  const editorFontSizes = useSelect(( select ) => {
    return select('core').getThemeSupports();
  });
 
  const rawFontSizes = editorFontSizes['editor-font-sizes'].map(function(fontSize) {
    return fontSize;
  });
  console.log(rawFontSizes);

  const fontSizes = [
    {
      name: 'Small',
      slug: 'small',
      size: 12,
    },
    {
      name: 'Big',
      slug: 'big',
      size: 26,
    },
  ];
  const fallbackFontSize = 16;

  return (
    <FontSizePicker
      fontSizes={ fontSizes }
      value={ fontSize }
      fallbackFontSize={ fallbackFontSize }
      onChange={ (newFontSize) => {
        setFontSize(newFontSize);
      } }
    />
  );
};
 