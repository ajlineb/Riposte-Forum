
async function getUser(){
    const response = await fetch('/session');
    const jsonRes = await response.json();
    const allUsers = await fetch('/api/user');
    const allUserJson = await allUsers.json();
    let matchId = allUserJson.filter(user => user.username === jsonRes.username).map(user => user.id);
    return matchId
}

function runModal (submitButton) {
    let modal = document.getElementById("my-modal");
    //let btn = document.getElementById("open-btn");
    let button = document.getElementById("ok-btn");

    submitButton.onclick = function() {
    modal.style.display = "block";
    bgColor.style.display = "block";
    }
    // We want the modal to close when the OK button is clicked
    button.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}

async function submitNewPost(event) {
    event.preventDefault();
    const modal = document.getElementById("my-modal");
    const okButton = document.getElementById("ok-btn");
    const post_title = document.getElementById('post_title').value;
    const post_content = document.getElementById('post_content').value;
    const userName = await getUser();

    const response = await fetch('/api/forum', {
        method: 'POST',
        body: JSON.stringify({
            "forum_name": post_title,
            "forum_text": post_content,
            "forum_time_stamp": "2001-01-03 01:44:00", 
            "user_id": parseInt(userName)
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const text = response.status;
      console.log(text);
      if (text === 200) {
        modal.style.display = "block";
        //bgColor.style.display = "block";
        okButton.onclick = function() {
          modal.style.display = "none";
          document.location.replace('/all-posts');
          }
      
          window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
          }
      }
}
const submitPost = document.getElementById('post_button');
submitPost.addEventListener('click', submitNewPost);

  