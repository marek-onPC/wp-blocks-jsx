import { edit } from './edit';
import { save } from './save';
import { deprecated } from './deprecated';

const { registerBlockType } = wp.blocks;

(function faqBlock() {

  /**
   * Register new block - FAQ
   */
  registerBlockType('blocksplus/faq-block', {
    title: 'BlocksPlus: FAQ',
    description: 'FAQ block with clickable heading and collapsible content',
    icon: 'insert-before',
    category: 'layout',
    attributes: {
      heading: {
        type: 'string'
      },
      headingTag: {
        type: 'string',
        default: 'p'
      },
      headingTextColor: {
        type: 'string'
      },
      headingBgColor: {
        type: 'string'
      },
      headingTextSize: {
        type: 'number'
      },
      isHeadingContentSpaceDisabled: {
        type: 'boolean',
        default: false
      }
    },

    edit: edit,

    save: save,

    deprecated: deprecated
  });
})();
