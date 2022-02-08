import { edit } from './edit';
import { save } from './save';
import { deprecated } from './deprecated';

const { registerBlockType } = wp.blocks;

export function modalBlock() {

  /**
   * Register new block - Modal
   */
  registerBlockType('blocksplus/modal-block', {
    title: 'Modal',
    description: 'Modal block with button to open modal with content',
    icon: 'feedback',
    category: 'blocksplus',
    attributes: {
      buttonText: {
        type: 'string'
      },
      buttonTextSize: {
        type: 'number'
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

    save: save,

    deprecated: deprecated
  });
}