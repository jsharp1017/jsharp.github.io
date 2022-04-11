// document.querySelector('button')
// document.querySelector('.new-quote button')

const quoteButton = document.querySelector('#js-new-quote');
const endpoint = 'https://www.boredapi.com/api/activity';

quoteButton.addEventListener('click', getQuote);
async function getQuote() {
  console.log('test quote')
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.activity)
  } catch(err) {
    console.log(err)
    alert('failed');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text')
  quoteText.textContent = quote;
}

var learnButton = document.getElementById('learnMore');
var learnPara = document.getElementById('learnParagraph');
var displaySetting = learnPara.style.display;

learnButton.addEventListener('click', togglePara);

function togglePara() {
  if (displaySetting == 'block') {
    learnPara.style.display = 'none';
    console.log('upper')
    learnButton.innerHTML = 'Learn more about me!'
  }
  else {
    learnPara.style.display = 'block';
    console.log('test')
    learnButton.innerHTML = 'Not as interesting as I thought it would be.'
  }
}
