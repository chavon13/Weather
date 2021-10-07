let zip = document.querySelector("#zipcode");
let button = document.getElementById("submit")
let temp = document.querySelector("#temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let description = document.querySelector("#description");
let wind = document.querySelector(".wind");


// function weatherBalloon( zipCode ) {
//     const key
//     fetch('https://api.openweathermap.org/data/2.5/weather?zip='+zipCode+'&units=imperial'+'&appid=${apiKEY}')  
//     // .then( => response.json())
//     .then(function(resp) { 
//         let formattedData = resp.json();
//         console.log(formattedData);
//         return formattedData}) 
//     .then(function(data) {
//             drawWeather(data);
// })
//     /*.catch(function(error) {
//         console.log(error)
//     });*/
// }

const weatherBalloon2 = async (zipcode) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`)
    console.log(data);
    const formattedData = await data.json();
    console.log(formattedData);

    let newTemp = formattedData.main.temp;
    temp.innerHTML = newTemp;
    let newCity = formattedData.name;
    city.innerHTML = newCity;
    let newHumidity ="Humidity: " + formattedData.main.humidity;
    humidity.innerHTML = newHumidity ;
    let newDescription = formattedData.weather[0].description;
    description.innerHTML = "Conditions: " + newDescription;
    let newWind ="Wind speed: " + formattedData.wind.speed;
    wind.innerHTML = newWind
}
//weatherBallon2(30096);


button.addEventListener("click", (evt) => {
    evt.preventDefault();
console.log(zip);
weatherBalloon2(zip.value);
})
//window.onload = function() {
//    weatherBalloon2( zip );
//}

