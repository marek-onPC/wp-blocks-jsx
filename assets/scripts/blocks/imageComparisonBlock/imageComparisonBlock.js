import { edit } from './edit';
import { save } from './save';

const { registerBlockType } = wp.blocks;

(function imageComparisonBlock() {

  /**
   * Register new block - Image Comparison
   */
  registerBlockType('blocksplus/image-comparison-block', {
    title: 'BlocksPlus: Image Comparison',
    description: 'Image Comparison block with slider option to compare images',
    icon: 'format-gallery',
    category: 'layout',
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
})();
