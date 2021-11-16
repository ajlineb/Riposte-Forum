async function getUser() {
  const response = await fetch('/session');
  const jsonRes = await response.json();
  const allUsers = await fetch('/api/user');
  const allUserJson = await allUsers.json();
  let matchId = allUserJson
    .filter((user) => user.username === jsonRes.username)
    .map((user) => user.id);
  return matchId;
}

async function getPost() {
  console.log(window.location.href);
  currentPosturl = window.location.href;
  const urlSplit = currentPosturl.split('/');
  postId = urlSplit[urlSplit.length - 1];
  console.log(postId);
  console.log(urlSplit);
  return postId;
}

function runModal(submitButton) {
  let modal = document.getElementById('my-modal');
  //let btn = document.getElementById("open-btn");
  let button = document.getElementById('ok-btn');

  submitButton.onclick = function () {
    modal.style.display = 'block';
    bgColor.style.display = 'block';
  };
  // We want the modal to close when the OK button is clicked
  button.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

async function submitNewComment(event) {
  event.preventDefault();
  let today = new Date();
  let date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = date + ' at ' + time;
  console.log(dateTime);
  const comment = document.getElementById('comment-field').value;
  const modal = document.getElementById('my-modal');
  const okButton = document.getElementById('ok-btn');
  const userName = await getUser();
  const post = await getPost();

  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      comment_desc: comment,
      comment_time_stamp: dateTime,
      user_id: parseInt(userName),
      forum_id: post,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  document.location.reload;
  if (response.status == 200) {
    modal.style.display = 'block';
    //bgColor.style.display = "block";
    okButton.onclick = function () {
      modal.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
}
const submitPost = document.querySelector('#comment-btn');
submitPost.addEventListener('click', submitNewComment);
