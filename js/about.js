const Director = document.getElementById('Director');
console.log("Director");
const Coach = document.getElementById('Coach');
const para = document.querySelector('p');

Director.addEventListener('click', function onClick(event) {
  document.body.style.backgroundImage = "url('../img/director.png')";
  console.log("Director");
});

Coach.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('../img/coach.png')";
});
