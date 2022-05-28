import { faqBlock } from './blocks/faqBlock/faqBlock';
import { faqBlockFront } from './blocks/faqBlock/faqBlockFront';
import { imageComparisonBlock } from './blocks/imageComparisonBlock/imageComparisonBlock';
import { imageComparisonBlockFront } from './blocks/imageComparisonBlock/imageComparisonBlockFront';
import { modalBlock } from './blocks/modalBlock/modalBlock';
import { modalBlockFront } from './blocks/modalBlock/modalBlockFront';
import { socialShareButtonsBlock } from './blocks/socialShareButtonsBlock/socialShareButtonsBlock';
import { socialShareButtonsBlockFront } from './blocks/socialShareButtonsBlock/socialShareButtonsBlockFront';

faqBlock();
imageComparisonBlock();
modalBlock();
socialShareButtonsBlock();

window.addEventListener('load', function() {
  faqBlockFront();
  imageComparisonBlockFront();
  modalBlockFront();
  socialShareButtonsBlockFront();
});
