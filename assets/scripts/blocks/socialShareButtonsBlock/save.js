const { Dashicon } = wp.components;

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
          <Dashicon icon="twitter" className="wp-block-blocksplus-social-share-buttons-block__share-icon twitter" />
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
