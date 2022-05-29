const { Component } = wp.element;
const { FontSizePicker, PanelBody } = wp.components;

/**
 * Component that renders UI that allows users to select a font size from a pre-defined set of sizes
 */
export default class BlocksPlusFontSizePicker extends Component {
  render() {
    return (
      <PanelBody title={this.props.title}>
        <FontSizePicker
          fontSizes={this.props.fontSizes}
          value={this.props.selectedFontSize}
          disableCustomFontSizes
          onChange={(newFontSize) => {
            this.props.fontPickerCallback(newFontSize);
          }}
        />
      </PanelBody>
    );
  }
}
