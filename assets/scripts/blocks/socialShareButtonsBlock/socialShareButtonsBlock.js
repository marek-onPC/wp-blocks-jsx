import { edit } from './edit';
import { save } from './save';

const { registerBlockType } = wp.blocks;

(function socialShareButtonsBlock() {
  /**
   * Register new block - Social Share Buttons
   */
  registerBlockType('blocksplus/social-share-buttons-block', {
    title: 'BlocksPlus: Social Share Buttons',
    description: 'Social Share Buttons block to share your current page/post on social media',
    icon: 'share',
    category: 'layout',
    attributes: {
      facebook: {
        attribute: 'boolean',
        default: false
      },
      twitter: {
        attribute: 'boolean',
        default: false
      },
      linkedIn: {
        attribute: 'boolean',
        default: false
      },
      reddit: {
        attribute: 'boolean',
        default: false
      },
      copyUrl: {
        attribute: 'boolean',
        default: false
      }
    },

    edit: edit,

    save: save
  });
})();
