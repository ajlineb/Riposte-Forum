const validatePassword = function () {
  if (
    document.getElementById('password').value !=
    document.getElementById('password_confirm').value
  ) {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Does not match';
  } else {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first-name').value.trim();
  const lastName = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (firstName && lastName && email && password) {
    // TODO: Go back and update applicable fields
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .getElementById('create-account')
  .addEventListener('submit', signupHandler);
