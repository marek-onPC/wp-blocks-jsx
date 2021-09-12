import { faqBlock } from './blocks/faqBlock/faqBlock';
import { faqBlockFront } from './blocks/faqBlock/faqBlockFront';
import { imageComparisonBlock } from './blocks/imageComparisonBlock/imageComparisonBlock';
import { imageComparisonBlockFront } from './blocks/imageComparisonBlock/imageComparisonBlockFront';
import { modalBlock } from './blocks/modalBlock/modalBlock';

faqBlock();
imageComparisonBlock();
modalBlock();

document.addEventListener("DOMContentLoaded", function(){
  faqBlockFront();
  imageComparisonBlockFront();
});