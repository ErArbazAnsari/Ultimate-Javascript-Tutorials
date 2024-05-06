const searchButton = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const inputName = document.getElementById("inputName");
const region = document.getElementById("region");
const country = document.getElementById("country");
const cityLocalTime = document.getElementById("cityLocalTime");
const cityTemp = document.getElementById("cityLocalTemp");
const currentLocation = document.getElementById("currentLocation");

async function getData(cityName) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=214f28f38b8441c9aa923049240605&q=${cityName}&aqi=yes`
    );
    return response.json();
}

searchButton.addEventListener("click", async () => {
    let input = cityName.value;
    const result = await getData(input);
    inputName.innerHTML = `City Name: ${result.location.name}`;
    region.innerHTML = `Region: ${result.location.region}`;
    country.innerHTML = `Country: ${result.location.country}`;
    cityLocalTime.innerText = `LocalTime: ${result.location.localtime}`;
    cityTemp.innerText = `City Temperature: ${result.current.temp_c}`;
});

async function currentLocationData(lat, lon) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=214f28f38b8441c9aa923049240605&q=${lat},${lon}&aqi=yes`
    );
    return response.json();
}

async function gotLocation(position) {
    // console.log("Successfully Got Your Current Location.");
    const result = await currentLocationData(
        position.coords.latitude,
        position.coords.longitude
    );
    console.log(result);
    return result;
}

function errLocation() {
    console.log("Successfully Got Your Current Location.");
}

currentLocation.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const myResult = await gotLocation(position);
        inputName.innerHTML = `City Name: ${myResult.location.name}`;
        region.innerHTML = `Region: ${myResult.location.region}`;
        country.innerHTML = `Country: ${myResult.location.country}`;
        cityLocalTime.innerText = `LocalTime: ${myResult.location.localtime}`;
        cityTemp.innerText = `City Temperature: ${myResult.current.temp_c}`;
    }, errLocation);
});
