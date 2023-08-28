/* eslint-disable no-use-before-define */

const updateChild = document.getElementById('updateBtn');

// Make edit button hidden when it's been clicked
updateChild.addEventListener('click', function() {
  fetch('/api/child/delete/:id');
});

// function showChildProfile(id) {
//   reload('/childprofile/' + id);
// }
