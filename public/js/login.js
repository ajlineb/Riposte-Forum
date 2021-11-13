// const createAccount = document.getElementById('create-account');

const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-address').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/all-posts');
    } else {
      alert('Failed to log in.');
    }
  }
  // if (email && password) {
  //   const response = await fetch('/api/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({ email, password }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/');
  //   } else {
  //     alert('Failed to log in.');
  //   }
  // }
};

document.getElementById('sign-in').addEventListener('submit', loginHandler);

// const signupHandler = async (event) => {
//   event.preventDefault();

//   //   const passwordInput = document.queryCommandValue('.password');

//   //   passwordInput.addEventListener('input', () => {
//   //     passwordInput.setCustomValidity('');
//   //     passwordInput.checkValidity();
//   //   });
//   //   passwordInput.addEventListener('invalid', () => {
//   //     if (passwordInput.value === '') {
//   //       passwordInput.setCustomValidity('Enter Password!');
//   //     } else {
//   //       passwordInput.setCustomValidity('do the damn thing');
//   //     }
//   //   });
//   // TODO: add first and last name
//   const email = document.querySelector('#email').value.trim(); // TODO: update field name
//   const password = document.querySelector('#password').value.trim(); // TODO: update field name

//   if (email && password) {
//     // TODO: Go back and update applicable fields
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }
//   }
// };

// createAccount.addEventListener('submit', signupHandler);
// document.getElementById('sign-in').addEventListener('submit', loginHandler);
// document
//   .getElementById('create-account')
//   .addEventListener('submit', signupHandler);
