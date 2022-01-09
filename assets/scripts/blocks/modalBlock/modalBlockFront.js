/**
 * Modal block open/close on front-end functionality
 */
 export function modalBlockFront() {
  const modalBlocks = document.querySelectorAll('.wp-block-gutenplus-modal-block');

  if(modalBlocks.length > 0) {
    modalBlocks.forEach(modalBlock => {
      let modalButton = modalBlock.querySelector('.wp-block-gutenplus-modal-block__button'),
          modalBox = modalBlock.querySelector('.wp-block-gutenplus-modal-block__modal'),
          modalClose = modalBlock.querySelector('.wp-block-gutenplus-modal-block__close');
      
      modalButton.addEventListener('click', () => {
        modalBox.classList.toggle('--active');
        document.body.classList.toggle('--modal');
      });
      
      modalClose.addEventListener('click', () => {
        modalBox.classList.remove('--active');
        document.body.classList.toggle('--modal');
      });
      
      modalBox.addEventListener('click', (e) => {
        if (e.target === modalBox) {
          modalBox.classList.remove('--active');
          document.body.classList.toggle('--modal');
        }
      });
    });
  }
}