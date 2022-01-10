const { Component } = wp.element;
const { PanelColorSettings } = wp.blockEditor;

/**
 * Component that renders UI that allows users to select a element's text/background color
 */
 export default class BlocksPlusColorPicker extends Component {
  render() {
    return (
      <PanelColorSettings 
        title={ this.props.title }
        colorSettings={[
        {
          value: this.props.textColor,
          onChange: this.props.textColorCallback,
          label: this.props.textLabel
        },
        {
          value: this.props.bgColor,
          onChange: this.props.bgColorCallback,
          label: this.props.bgLabel
        },
      ]}
    />
    );
  }
}