const comBtn = document.querySelector('.com-Btn');
const likeBtn = document.querySelector('.like-Btn');
const dislikeBtn = document.querySelector('.dislike-Btn');
const postBtn = document.querySelector('.post-Com');
const inputDiv = document.querySelector('.comment-field');

comBtn.addEventListener('click', () => {
  document.getElementById('comment-field').style = 'display: visible';
});

likeBtn.addEventListener('click', () => {
  // change icon from lined to filled
});

dislikeBtn.addEventListener('click', () => {
  // change icon from lined to filled
});
