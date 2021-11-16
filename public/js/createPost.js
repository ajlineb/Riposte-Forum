const createPost = async () => {
  const response = await fetch('/newpost', {
    method: 'GET',
    // headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('./newpost');
  } else {
    alert('Failed to create post.');
  }
};

document.querySelector('#create-post').addEventListener('click', createPost);
