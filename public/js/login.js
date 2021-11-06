const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-address').value.trim();
  const password = document.querySelector('#password').value.trim();

  //   console.log(email, '', password);

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim(); // TODO: update field name
  const password = document.querySelector('#password-signup').value.trim(); // TODO: update field name

  if (email && password) {
    // TODO: Go back and update applicable fields
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector('#sign-in').addEventListener('submit', loginHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupHandler);
