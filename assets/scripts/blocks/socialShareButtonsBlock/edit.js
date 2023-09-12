const { Fragment } = wp.element;
const { Dashicon, ToggleControl, Icon } = wp.components;

/**
 * Edit function for Social Share Buttons block's Gutenberg Block Editor functionality
 *  
 * @param {props} props to store block's data and attributes
 */
export const edit = (props) => {
  const { attributes, setAttributes } = props;

  /**
   * Component's attribute set functions
   */
  function isFacebookOn(isOn) {
    setAttributes({ facebook: isOn });
  }

  function isTwitterOn(isOn) {
    setAttributes({ twitter: isOn });
  }

  function isLinkedInOn(isOn) {
    setAttributes({ linkedIn: isOn });
  }

  function isRedditOn(isOn) {
    setAttributes({ reddit: isOn });
  }

  function isCopyUrlOn(isOn) {
    setAttributes({ copyUrl: isOn });
  }

  return (
    <Fragment>
      <div className="blocksplus-editor-social-share-buttons-block">
        <div className="blocksplus-editor-social-share-buttons-block__share-button">
          <Dashicon icon="facebook" className="blocksplus-editor-social-share-buttons-block__share-icon facebook" />
          <ToggleControl
            checked={attributes.facebook}
            onChange={() => {
              isFacebookOn(!attributes.facebook);
            }}
          />
        </div>
        <div className="blocksplus-editor-social-share-buttons-block__share-button">
          <span className="dashicon dashicons blocksplus-editor-social-share-buttons-block__share-icon twitter">
            <Icon icon={
              <svg width="24" height="34">
                <path xmlns="http://www.w3.org/2000/svg" d="M 11.0892 7.8961 l 6.9366 -7.8961 h -1.6431 l -6.0256 6.8546 l -4.8091 -6.8546 h -5.5481 l 7.2738 10.3664 l -7.2738 8.2792 h 1.6431 l 6.359 -7.2402 l 5.0798 7.2402 h 5.5481 m -16.3938 -17.4321 h 2.5244 l 11.6208 16.2783 h -2.525" />
              </svg>
            } />
          </span>
          <ToggleControl
            checked={attributes.twitter}
            onChange={() => {
              isTwitterOn(!attributes.twitter);
            }}
          />
        </div>
        <div className="blocksplus-editor-social-share-buttons-block__share-button">
          <Dashicon icon="linkedin" className="blocksplus-editor-social-share-buttons-block__share-icon linkedin" />
          <ToggleControl
            checked={attributes.linkedIn}
            onChange={() => {
              isLinkedInOn(!attributes.linkedIn);
            }}
          />
        </div>
        <div className="blocksplus-editor-social-share-buttons-block__share-button">
          <Dashicon icon="reddit" className="blocksplus-editor-social-share-buttons-block__share-icon reddit" />
          <ToggleControl
            checked={attributes.reddit}
            onChange={() => {
              isRedditOn(!attributes.reddit);
            }}
          />
        </div>
        <div className="blocksplus-editor-social-share-buttons-block__share-button">
          <Dashicon icon="share-alt2" className="blocksplus-editor-social-share-buttons-block__share-icon shareicon" />
          <ToggleControl
            checked={attributes.copyUrl}
            onChange={() => {
              isCopyUrlOn(!attributes.copyUrl);
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};