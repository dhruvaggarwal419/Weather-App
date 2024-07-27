const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=5815a170087f5d08d4ea0794d75f25c3&units=metric";
let searchVal = document.querySelector(".container input");
document.querySelector("button").addEventListener("click", async () => {
    updateWeather();
})

window.addEventListener("load", () => {
    searchVal.value = "delhi";
    updateWeather();
})

const updateWeather = async () => {
    let response = await fetch(`${baseUrl}${searchVal.value}${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".msg").classList.remove('hide');
    } else {
        document.querySelector(".msg").classList.add('hide');
        let data = await response.json();
        let temp = Math.round(data.main.temp) + "°c";
        console.log(data);
        console.log(data.weather[0].main);
        document.querySelector(".temp").innerHTML = temp;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidityPercentage").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main === "Clouds") {
            document.querySelector(".showIcon img").src = "clouds.png";
        } else if (data.weather[0].main === "Clear") {
            document.querySelector(".showIcon img").src = "clear.png";
        } else if (data.weather[0].main === "Rain") {
            document.querySelector(".showIcon img").src = "irain.png";
        } else if (data.weather[0].main === "Haze") {
            document.querySelector(".showIcon img").src = "drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            document.querySelector(".showIcon img").src = "mist.png";
        } else if (data.weather[0].main === "Snow") {
            document.querySelector(".showIcon img").src = "snow.png";
        }
    }
}