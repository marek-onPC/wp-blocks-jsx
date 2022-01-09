import { edit } from './edit';
import { save } from './save';

const { registerBlockType } = wp.blocks;

export function imageComparisonBlock() {

  /**
   * Register new block - Image Comparison
   */
  registerBlockType('gutenplus/image-comparison-block', {
    title: 'Image Comparison',
    description: 'Image Comparison block with slider option to compare images',
    icon: 'format-gallery',
    category: 'gutenplus',
    attributes: {
      imageOne: {
        imageAlt: {
          attribute: 'alt',
          selector: '.image'
        },
        imageSrc: {
          attribute: 'src',
          selector: '.image'
        }
      },
      imageTwo: {
        imageAlt: {
          attribute: 'alt',
          selector: '.image'
        },
        imageSrc: {
          attribute: 'src',
          selector: '.image'
        }
      },
      imagesPosition: {
        type: 'string',
        default: 'initial',
      },
      sliderColor: {
        type: 'string',
        default: '#ffffff'
      },
      sliderOpacity: {
        type: 'number',
        default: 0.85
      },
    },

    edit: edit,

    save: save
  });
}
