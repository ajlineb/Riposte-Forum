
async function getUser(){
    const response = await fetch('/session');
    const jsonRes = await response.json();
    const allUsers = await fetch('/api/user');
    const allUserJson = await allUsers.json();
    let matchId = allUserJson.filter(user => user.username === jsonRes.username).map(user => user.id);
    return matchId
}


async function submitNewPost(event) {
    event.preventDefault();
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
}
const submitPost = document.getElementById('post_button');
submitPost.addEventListener('click', submitNewPost);

  