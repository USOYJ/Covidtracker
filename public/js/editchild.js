const updateChild = async () => {
  try {
    const child_id = window.location.toString().split('/').pop();
    const first_name = document.querySelector('#child-name-first').value.trim()
    const last_name = document.querySelector('#child-name-last').value.trim()
    const parent_email = document.querySelector('#email').value.trim()
    const parent_phone = document.querySelector('#parentPhone').value.trim()
    const response = await fetch(`/api/child/${child_id}`, {
      method: 'PUT',
      body: JSON.stringify({ first_name, last_name, parent_email, parent_phone }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/home');
    } else {
      const errorMessage = `Failed to update a child. Status: ${response.status}`;
      const responseText = await response.text();
      if (responseText) {
        throw new Error(`${errorMessage}\nResponse: ${responseText}`);
      } else {
        throw new Error(errorMessage);
      }
    }
  } catch (error) {
    alert(error.message);
  }
};

const deleteChildFormHandler = async (child_id) => {
  try {
    const response = await fetch(`/api/posts/${child_id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/child');
    } else {
      const errorMessage = `Failed to delete a child. Status: ${response.status}`;
      const responseText = await response.text();
      if (responseText) {
        throw new Error(`${errorMessage}\nResponse: ${responseText}`);
      } else {
        throw new Error(errorMessage);
      }
    }
  } catch (error) {
    alert(error.message);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const updateChildButton = document.querySelector('#updatebtn');
  const deleteChildButton = document.querySelector('#delete-child');

  // if (updateChildButton) {
  //   updateChildButton.addEventListener('click', async (event) => {
  //     event.preventDefault();
  //     if (first_name && last_name && parent_email && parent_phone) {
  //       await updateChild(child_id, first_name, last_name, parent_email, parent_phone);
  //     }
  //   });
  // }

  // if (deleteChildButton) {
  //   deleteChildButton.addEventListener('click', async (event) => {
  //     event.preventDefault();
  //     const child_id = window.location.toString().split('/').pop();
  //     await deleteChildFormHandler(child_id);
  //   });
  // }
});
