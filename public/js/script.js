/* eslint-disable no-use-before-define */

document.querySelector('table tbody').addEventListener('click', function(event) {
  if (event.target.className === 'edit-row-btn') {
    showChildProfile(event.target.dataset.id);
  }
});

function showChildProfile(id) {
  reload('/childprofile/' + id);
}
