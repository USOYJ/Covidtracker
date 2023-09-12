/* eslint-disable no-use-before-define */

const updateChild = document.getElementById('updateBtn');
const AddChild = document.getElementById('add-Child-Btn');

// Make edit button hidden when it's been clicked
updateChild.addEventListener('click', function() {
  fetch('/api/child/delete/:id');
});

// Make Add Child button to the new child form
AddChild.addEventListener('click', function() {
  href('/newChild');
});

// function showChildProfile(id) {
//   reload('/childprofile/' + id);
// }
