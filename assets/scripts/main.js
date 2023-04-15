import { faqBlockFront } from './blocks/faqBlock/faqBlockFront';
import { imageComparisonBlockFront } from './blocks/imageComparisonBlock/imageComparisonBlockFront';
import { modalBlockFront } from './blocks/modalBlock/modalBlockFront';
import { socialShareButtonsBlockFront } from './blocks/socialShareButtonsBlock/socialShareButtonsBlockFront';

window.addEventListener('load', function () {
  faqBlockFront();
  imageComparisonBlockFront();
  modalBlockFront();
  socialShareButtonsBlockFront();
});
