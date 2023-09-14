/* eslint-disable no-use-before-define */

const updateChild = document.getElementById('updateBtn');
const searchBtn = document.getElementById('search-btn');

// Listen to the button "search-btn" and get the value of the input field "search-input"
searchBtn.addEventListener('click', function() {
  // Get the value of the input field with id="search-input"
  const searchInput = document.getElementById('search-input').value;
  // Log the value of searchInput
  console.log(searchInput);
  // Redirect to the search route with the value of searchInput
  window.location.replace('/search/' + searchInput);
});


// Child Profile page
// Make edit button hidden when it's been clicked
updateChild.addEventListener('click', function() {
  fetch('/api/child/delete/:id');
});

