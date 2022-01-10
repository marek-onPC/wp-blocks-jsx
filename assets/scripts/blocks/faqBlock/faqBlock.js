import { edit } from './edit';
import { save } from './save';

const { registerBlockType } = wp.blocks;

export function faqBlock() {

  /**
   * Register new block - FAQ
   */
  registerBlockType('blocksplus/faq-block', {
    title: 'FAQ',
    description: 'FAQ block with clickable heading and collapsible content',
    icon: 'insert-before',
    category: 'blocksplus',
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
      }
    },

    edit: edit,

    save: save
  });
}
