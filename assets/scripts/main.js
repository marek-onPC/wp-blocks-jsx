import { faqBlock, faqBlockFront } from './blocks/faqBlock';
import { imageComparisonBlock, imageComparisonBlockFront } from './blocks/imageComparisonBlock';
import { modalBlock } from './blocks/modalBlock';

faqBlock();
imageComparisonBlock();
modalBlock();

document.addEventListener("DOMContentLoaded", function(){
  faqBlockFront();
  imageComparisonBlockFront();
});