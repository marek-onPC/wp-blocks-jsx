import { faqBlock, faqBlockFront } from './blocks/faqBlock';
import { imageComparisonBlock, imageComparisonBlockFront } from './blocks/imageComparisonBlock';
faqBlock();
imageComparisonBlock();

document.addEventListener("DOMContentLoaded", function(){
  faqBlockFront();
  imageComparisonBlockFront();
});