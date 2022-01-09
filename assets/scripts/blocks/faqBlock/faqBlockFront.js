/**
 * FAQ answer show/hide CSS class toggle function (on front-end)
 */
 export function faqBlockFront() {
  const faqBlocks = document.querySelectorAll('.wp-block-gutenplus-faq-block__heading');

  if(faqBlocks.length > 0) {
    faqBlocks.forEach(faqBlock => {
      faqBlock.nextSibling.style.maxHeight = faqBlock.nextSibling.scrollHeight + 'px';
      
      faqBlock.addEventListener('click', (e) => {
  
        faqBlocks.forEach(faqBlock => {
          if(e.currentTarget === faqBlock) {
            faqBlock.classList.toggle('--collapsed');
          }
        });
  
      });
    });
  }
}