const RocketLeague = document.getElementById('RocketLeague');
console.log("RocketLeague");
const Valorant = document.getElementById('Valorant');
const para = document.querySelector('p');

RocketLeague.addEventListener('click', function onClick(event) {
  document.body.style.backgroundImage = "url('../img/RocketLeague.png')";
  console.log("RocketLeague");
});

Valorant.addEventListener('click', function onClick(event) {
  document.body.style.backgroundImage ="url('../img/Valorant.png')";
});

para.addEventListener('click',favorite);

function favorite () {
  let name = prompt(`Which esports team is Josh's favorite?`);
  para.textContent = `I think Josh likes the ${name} team more.`;
  console.log(name);
}
