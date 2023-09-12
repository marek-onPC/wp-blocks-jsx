const { Dashicon, Icon } = wp.components;

/**
 * Save function for rendering Social Share Buttons block on front-end
 *  
 * @param {props} props to access saved data and attributes
 */
export const save = (props) => {
  const { attributes } = props;
  const permalink = wp.data.select("core/editor").getCurrentPost().guid.rendered;

  return (
    <div className="wp-block-blocksplus-social-share-buttons-block">
      {attributes.facebook
        ? <a href={`https://facebook.com/sharer/sharer.php?u=${permalink}`} className="wp-block-blocksplus-social-share-buttons-block__link" target="_blank" rel="noreferrer noopener">
          <Dashicon icon="facebook" className="wp-block-blocksplus-social-share-buttons-block__share-icon facebook" />
        </a>
        : null}
      {attributes.twitter
        ? <a href={`https://twitter.com/share?url=${permalink}`} className="wp-block-blocksplus-social-share-buttons-block__link" target="_blank" rel="noreferrer noopener">
          <span className="dashicon dashicons blocksplus-editor-social-share-buttons-block__share-icon twitter">
            <Icon icon={
              <svg width="24" height="34">
                <path xmlns="http://www.w3.org/2000/svg" d="M 11.0892 7.8961 l 6.9366 -7.8961 h -1.6431 l -6.0256 6.8546 l -4.8091 -6.8546 h -5.5481 l 7.2738 10.3664 l -7.2738 8.2792 h 1.6431 l 6.359 -7.2402 l 5.0798 7.2402 h 5.5481 m -16.3938 -17.4321 h 2.5244 l 11.6208 16.2783 h -2.525" />
              </svg>
            } />
          </span>
        </a>
        : null}
      {attributes.linkedIn
        ? <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`} className="wp-block-blocksplus-social-share-buttons-block__link" target="_blank" rel="noreferrer noopener">
          <Dashicon icon="linkedin" className="wp-block-blocksplus-social-share-buttons-block__share-icon linkedin" />
        </a>
        : null}
      {attributes.reddit
        ? <a href={`https://www.reddit.com/submit?url=${permalink}`} className="wp-block-blocksplus-social-share-buttons-block__link" target="_blank" rel="noreferrer noopener">
          <Dashicon icon="reddit" className="wp-block-blocksplus-social-share-buttons-block__share-icon reddit" />
        </a>
        : null}
      {attributes.copyUrl
        ? <a href={`${permalink}`} className="wp-block-blocksplus-social-share-buttons-block__link shareurl">
          <Dashicon icon="share-alt2" className="wp-block-blocksplus-social-share-buttons-block__share-icon shareicon" />
        </a>
        : null}
    </div>
  );
};
