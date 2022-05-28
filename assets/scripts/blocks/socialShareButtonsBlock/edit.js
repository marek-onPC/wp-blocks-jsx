const { Fragment } = wp.element;
const { Dashicon, ToggleControl } = wp.components;

/**
 * Edit function for FAQ block's Gutenberg Block Editor functionality
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
        <Dashicon icon="twitter" className="blocksplus-editor-social-share-buttons-block__share-icon twitter" />
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
    </Fragment>
  );
};