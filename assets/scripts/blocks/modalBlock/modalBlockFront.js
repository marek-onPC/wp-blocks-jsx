/**
 * Modal block open/close on front-end functionality
 */
 export function modalBlockFront() {
  const modalBlocks = document.querySelectorAll('.wp-block-gutenberg-plus-modal-block');

  if(modalBlocks.length > 0) {
    modalBlocks.forEach(modalBlock => {
      let modalButton = modalBlock.querySelector('.wp-block-gutenberg-plus-modal-block__button'),
          modalBox = modalBlock.querySelector('.wp-block-gutenberg-plus-modal-block__modal'),
          modalClose = modalBlock.querySelector('.wp-block-gutenberg-plus-modal-block__close');
      
      modalButton.addEventListener('click', () => {
        modalBox.classList.toggle('--active');
      });
      
      modalClose.addEventListener('click', () => {
        modalBox.classList.remove('--active');
      });
    });
  }
}