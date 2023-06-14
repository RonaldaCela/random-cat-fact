const loader = document.querySelector('.loader');
const fact = document.getElementById('fact');
function logJSONData() {
  loader.hidden = false;
  fact.hidden = true;
  const request = fetch('https://catfact.ninja/fact');
  setTimeout(async () => {
    const response = await request;
    const jsonData = await response.json();
    fact.innerHTML = jsonData.fact;
    loader.hidden = true;
    fact.hidden = false;
    console.log(jsonData);
  }, 1000);
}





