const updateChild = async (child_id, title, content) => {
  try {
    const response = await fetch(`/api/posts/${child_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/child');
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
  const updateChildButton = document.querySelector('#update-child');
  const deleteChildButton = document.querySelector('#delete-child');

  if (updateChildButton) {
    updateChildButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const child_id = window.location.toString().split('/').pop();
      const title = document.querySelector('#title-update-child').value.trim();
      const content = document.querySelector('#content-update-child').value.trim();
      if (title && content) {
        await updateChild(child_id, title, content);
      }
    });
  }

  if (deleteChildButton) {
    deleteChildButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const child_id = window.location.toString().split('/').pop();
      await deleteChildFormHandler(child_id);
    });
  }
});
