
async function submitNewPost(event) {
    console.log("Running submit post");
    event.preventDefault();
    const post_title = document.getElementById('post_title').value;
    const post_content = document.getElementById('post_content').value;

    const response = await fetch('http://localhost:3001/api/forum', {
        method: 'POST',
        body: JSON.stringify({
            "forum_name": post_title,
            "forum_text": post_content,
            "forum_time_stamp": "2001-01-03 01:44:00", 
            "userid": 1 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
}
const sB = document.getElementById('post_button');
//console.log(sB)
sB.addEventListener('click', submitNewPost)