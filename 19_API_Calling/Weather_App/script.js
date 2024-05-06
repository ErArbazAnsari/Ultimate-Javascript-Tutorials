const searchButton = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const inputName = document.getElementById("inputName");
const region = document.getElementById("region");
const country = document.getElementById("country");
const cityLocalTime = document.getElementById("cityLocalTime");
const cityTemp = document.getElementById("cityLocalTemp");

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
