const comBtn = document.querySelector('.com-Btn');
const likeBtn = document.querySelector('.like-Btn');
const dislikeBtn = document.querySelector('.dislike-Btn');
const likedBtn = document.querySelector('.liked-Btn');
const dislikedBtn = document.querySelector('.disliked-Btn');

comBtn.addEventListener('click', () => {
  document.getElementById('comment-field').style = 'display: visible';
  document.querySelector('.post-com').style = 'display: visible';
});

likeBtn.addEventListener('click', () => {
  console.log('im here');
  // change icon
  likeBtn.style = 'display: none';
  likedBtn.style = 'display: visible';
});

likedBtn.addEventListener('click', () => {
  // change icon
  likedBtn.style = 'display: none';
  likeBtn.style = 'display: visible';
});

dislikeBtn.addEventListener('click', () => {
  // change icon
  dislikeBtn.style = 'display: none';
  dislikedBtn.style = 'display: visible';
});

dislikedBtn.addEventListener('click', () => {
  // change icon
  dislikedBtn.style = 'display: none';
  dislikeBtn.style = 'display: visible';
});
