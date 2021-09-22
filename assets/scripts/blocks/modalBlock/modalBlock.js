import { edit } from './edit';
import { save } from './save';

const { registerBlockType } = wp.blocks;

export function modalBlock() {

  /**
   * Register new block - Modal
   */
  registerBlockType('gutenberg-plus/modal-block', {
    title: 'Modal',
    description: 'Modal block with button to open modal with content',
    icon: 'feedback',
    category: 'gutenberg-plus',
    attributes: {
      buttonText: {
        type: 'string'
      },
      buttonTextSize: {
        type: 'number',
        default: 16
      },
      buttonTextColor: {
        type: 'string'
      },
      buttonBgColor: {
        type: 'string'
      },
      buttonPosition: {
        type: 'string',
        default: 'flex-start'
      }
    },

    edit: edit,

    save: save
  });
}