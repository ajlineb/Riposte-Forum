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
  // add username
  const firstName = document.querySelector('#first-name').value.trim();
  const lastName = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();
  const modal = document.getElementById("my-modal");
  const okButton = document.getElementById("ok-btn");

  if (firstName && lastName && email && username && password) {
    // TODO: Go back and update applicable fields
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      await mailSend();
      scroll(0,0);
      console.log("response okay")
      modal.style.display = "block";
      okButton.onclick = function() {
        modal.style.display = "none";
        document.location.replace('/all-posts');
      }
    } else {
      alert('Failed to sign up.');
    }
  }
};
const mailSend = async () => {
  const from = "postmaster@riposte.com";
  const subject = "Welcome to Riposte";
  const text = "You have successfully signed up!";

  const response = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify({
      from: from,
      to: "corewired741@outlook.com",
      subject: subject,
      text: text
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

document.getElementById('create-account')
  .addEventListener('submit', signupHandler);
