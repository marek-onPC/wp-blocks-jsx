import { edit } from './edit';
import { save } from './save';

const { registerBlockType } = wp.blocks;

export function faqBlock() {

  /**
   * Register new block - FAQ
   */
  registerBlockType('gutenplus/faq-block', {
    title: 'FAQ',
    description: 'FAQ block with clickable heading and collapsible content',
    icon: 'insert-before',
    category: 'gutenplus',
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
