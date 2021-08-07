import { faqBlock, expandFaq } from './blocks/faqBlock';
import { imageComparisonBlock } from './blocks/imageComparisonBlock';
faqBlock();
imageComparisonBlock();

document.addEventListener("DOMContentLoaded", function(){
  expandFaq();
});