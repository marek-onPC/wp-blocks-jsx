import { modalButtonColorSettings } from './modalButtonColorSettings';

export function modalBlock() {
  const { registerBlockType } = wp.blocks;
  const { withColors } = wp.blockEditor;

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
      }
    },

    edit: withColors({ buttonTextColor: 'color', buttonBgColor: 'background-color' })(modalButtonColorSettings),

    save({ attributes }) {
      return (
        <div>

        </div>
      )
    }
  });
}