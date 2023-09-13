const deleteChild = async (child_id) => {
  const response = await fetch(`/api/children/${child_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to delete the child.');
  }
};

const deleteChildHandler = (event) => {
  if (event.target.matches('.delete-child')) {
    const child_id = event.target.getAttribute('data-child-id');
    deleteChild(child_id);
  }
};

document.addEventListener('click', deleteChildHandler);
