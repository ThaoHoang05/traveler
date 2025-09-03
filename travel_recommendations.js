let countriesList = [];
let templesList = [];
let beachesList = [];

function fetchData(){
    const url = './travel_recommendations_api.json';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.countries.forEach(country => {
            countriesList.push(country);});
        data.temples.forEach(temple => {
            templesList.push(temple);}
        );
        data.beaches.forEach(beach => {
            beachesList.push(beach);}
        );
        console.log('Data fetched successfully');
    })
    .catch(error => console.error('Error fetching data:', error));
}
fetchData();

function getInput(){
    const input = document.getElementById('inputField');
    var inputVal = input.value.trim().toLowerCase();
    console.log(inputVal);
    if(inputVal === "beaches" || inputVal === "beach"){
        display(beachesList);
    }else if(inputVal === "temples" || inputVal ==="temple"){
        display(templesList);
    }else{
        const filteredCountries = countriesList.find(country => country.name.toLowerCase() === inputVal);
        const cities = filteredCountries.cities;
        display(cities);
        }
}

function display(list){
    const popup = document.getElementById('popup-div');
    popup.innerHTML = ''; // Clear previous content
    if(list.length === 0){
        popup.innerHTML = '<p>No recommendations available.</p>';
        return;
    }
    list.forEach(item =>{
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-div';
        itemDiv.innerHTML = `<img src = '${item.imageUrl}' alt = '${item.name}'><br><h3>${item.name}</h3><br><p>${item.description}</p><br><button>Visit</button>`;
        popup.appendChild(itemDiv);
    });
}

function clearInput(){
    const popup = document.getElementById('popup-div');
    popup.innerHTML = '';

}