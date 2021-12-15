const form = document.getElementById('formApp');
const country = document.getElementById('country');
const url = 'https://api.covid19api.com//total/dayone/country/';

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let api = url + country.value
    covidData(api)
})
