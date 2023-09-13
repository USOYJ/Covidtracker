const newChildFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-child').value.trim();
  const content = document.querySelector('#content-new-child').value.trim();

  if (title && content) {
    const response = await fetch('/api/childAPI', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/child');
    } else {
      alert('Failed to create a new post.');
    }
  }
};

const newChildForm = document.querySelector('.new-child-form'); // Fixed the typo here
if (newChildForm) {
  newChildForm.addEventListener('submit', newChildFormHandler);
}
