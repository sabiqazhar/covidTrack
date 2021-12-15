const form = document.getElementById('formApp');
const country = document.getElementById('country');
const url = 'https://api.covid19api.com/total/dayone/country/';

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let api = url + country.value
    covidData(api)
});

async function covidData(api){
    let response = await fetch(api);
    let data = await response.json()

    let length = data.length;
    let index = length - 1;

    let confirmed = document.getElementById('confirmed');
    let death = document.getElementById('death');
    let recovered = document.getElementById('recovered');

    confirmed.innerHTML = "";
    recovered.innerHTML = "";
    death.innerHTML = "";

    confirmed.append('Total confirmed cases:' + data[index].Confirmed);
    recovered.append('Total recovered cases:' + data[index].Recovered);
    death.append('Total death cases:' + data[index].Deaths);
}
