/**
 * Assign "row delete" functionality to row's delete button
 */
export default function pluginAdminDeleteRow() {
  var deleteButtons = document.getElementsByClassName('button-row-delete');

  if (deleteButtons.length > 0) {
    Array.from(deleteButtons).forEach(deleteButton => {
      deleteButton.addEventListener('click', function() {
        deleteButton.parentNode.parentNode.remove();
      });
    });
  }
}