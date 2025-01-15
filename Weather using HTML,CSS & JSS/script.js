const apikey =  "587d393f6e962bbb22e209adc06ad122";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

setInterval( ()=>{
    let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
document.querySelector("#time").innerHTML = `${hr} : ${min} : ${sec} IST`;
},1000);

async function WeatherData(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#cityName").innerHTML = data.name;
    let weatherType = "";
    if(data.weather[0].description == "scattered clouds")
        weatherType = "Sunny";
    else if(data.weather[0].description == "broken clouds")
        weatherType = "Cloudy";
    else if(data.weather[0].description == "overcast clouds")
        weatherType = "Overcast";
    document.querySelector(".weather-type > .text").innerHTML = weatherType;
    document.querySelector(".wind > .attributes > .row > .windSpeed").innerHTML = `${data.wind.speed} Km/Hr`;
    document.querySelector(".wind > .attributes > .row > .cloudiness").innerHTML = `${data.clouds.all} %`;
    document.querySelector(".temp > .attributes > .row > .Pressure").innerHTML = `${data.main.pressure} Bar`;
    document.querySelector(".temp > .attributes > .row > .Humidity").innerHTML = `${data.main.humidity} %`;
}

searchBtn.addEventListener("click", ()=>{
    // console.log(searchBox.value);
    WeatherData(searchBox.value);
    searchBox.value="";
});