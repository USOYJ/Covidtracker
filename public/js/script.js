/* eslint-disable no-use-before-define */

document.querySelector('table tbody').addEventListener('click', function(event) {
  if (event.target.id === 'delete-row-btn') {
    console.log(event.target.dataset.childid);
    deleteRowById(event.target.dataset.childid);
  }
  if (event.target.className === 'edit-row-btn') {
    showChildProfile(event.target.dataset.id);
  }
});

// const updateBtn = document.querySelector('#update-row-btn');
// const searchBtn = document.querySelector('#search-btn');

// searchBtn.onclick = function() {
//   const searchValue = document.querySelector('#search-input').value;

//   fetch('/search' + searchValue)
//     .then(response => response.json())
//     .then(data => loadHTMLTable(data.data));
// };

// I need to delete the row from the database by id and then reload the page



function deleteRowById(id) {
  // delete from database by id and then reload the page
  fetch('/api/child/delete:' + id);
  location.reload('/home');
}

function handleEditRow(id) {
  const updateSection = document.querySelector('#update-row');
  updateSection.hidden = false;
  document.querySelector('#update-name-input').dataset.id = id;
}

// A function where I can show the child profile
function showChildProfile(id) {
  reload('/childprofile/' + id);
}
// updateBtn.onclick = function() {
//   const updateNameInput = document.querySelector('#update-name-input');


//   console.log(updateNameInput);

//   fetch('/update', {
//     method: 'PATCH',
//     headers: {
//       'Content-type' : 'application/json'
//     },
//     body: JSON.stringify({
//       id: updateNameInput.dataset.id,
//       name: updateNameInput.value
//     })
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         location.reload();
//       }
//     });
// };


// const addBtn = document.querySelector('#add-name-btn');

// addBtn.onclick = function () {
//   const nameInput = document.querySelector('#name-input');
//   const name = nameInput.value;
//   nameInput.value = '';

//   fetch('/insert', {
//     headers: {
//       'Content-type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify({ name : name})
//   })
//     .then(response => response.json())
//     .then(data => insertRowIntoTable(data.data));
// };

// function insertRowIntoTable(data) {
//   console.log(data);
//   const table = document.querySelector('table tbody');
//   const isTableData = table.querySelector('.no-data');

//   let tableHtml = '<tr>';

//   for (var key in data) {
//     if (data.hasOwnProperty(key)) {
//       if (key === 'dateAdded') {
//         data[key] = new Date(data[key]).toLocaleString();
//       }
//       tableHtml += `<td>${data[key]}</td>`;
//     }
//   }

//   tableHtml += `<td><button class="delete-row-btn" data-id=${data.id}>Delete</td>`;
//   tableHtml += `<td><button class="edit-row-btn" data-id=${data.id}>Edit</td>`;

//   tableHtml += '</tr>';

//   if (isTableData) {
//     table.innerHTML = tableHtml;
//   } else {
//     const newRow = table.insertRow();
//     newRow.innerHTML = tableHtml;
//   }
// }

// function loadHTMLTable(data) {
//   const table = document.querySelector('table tbody');

//   if (data.length === 0) {
//     table.innerHTML = '<tr><td class=\'no-data\' colspan=\'5\'>No Data</td></tr>';
//     return;
//   }

//   let tableHtml = '';

//   data.forEach(function ({id, name, date_added}) {
//     tableHtml += '<tr>';
//     tableHtml += `<td>${id}</td>`;
//     tableHtml += `<td>${name}</td>`;
//     tableHtml += `<td>${new Date(date_added).toLocaleString()}</td>`;
//     tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Delete</td>`;
//     tableHtml += `<td><button class="edit-row-btn" data-id=${id}>Edit</td>`;
//     tableHtml += '</tr>';
//   });

//   table.innerHTML = tableHtml;
// }