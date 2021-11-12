async function submitNewPost(event) {
    event.preventDefault();
    const post_title = document.querySelector('#post_title').value;
    const post_content = document.querySelector('#post_content').value;

    const response = await fetch(`/api/forum/`, {
        method: 'PUT',
        body: JSON.stringify({
            "forum_name": post_title,
            "forum_text": post_content,
            "forum_time_stamp": "2001-01-03 01:44:00", 
            "userid": "1" 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
}

document
  .querySelector('#post_button')
  .addEventListener('submit', submitNewPost);