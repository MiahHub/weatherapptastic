const apiKey = '77387d5f246d6b090975825bb5fe9906'
const formEl = document.querySelector('form');
const details = document.querySelector('.weatherdetails');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  details.innerHTML = '<h1>Loading weather...</h1>';
  const search = e.target.search.value;
  weatherApp(search);
});

function weatherApp(search) {
  fetchAPI(search);
}


async function fetchAPI(search){
  const queryUrl = 'http://api.weatherstack.com/current?access_key=6a73ed993fb67076477df407679';
  const results = await fetch(queryUrl);
  console.log(results);
  const data = await results.json();
  console.log(data);
}
  
