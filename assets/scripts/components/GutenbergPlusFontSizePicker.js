const { Component } = wp.element;
const { FontSizePicker } = wp.components;

/**
 * Component that renders UI that allows users to select a font size from a pre-defined set of sizes
 */
 export default class GutenbergPlusFontSizePicker extends Component {
  render() {
    return (
      <FontSizePicker
        fontSizes={ this.props.fontSizes }
        value={ this.props.selectedFontSize }
        disableCustomFontSizes
        onChange={ (newFontSize) => {
          this.props.fontPickerCallback(newFontSize);
        } }
      />
    );
  }
}
