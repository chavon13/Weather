let zip = document.querySelector("#zipcode");
let button = document.getElementById("submit")
let temp = document.querySelector("#temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let description = document.querySelector("#description");
let wind = document.querySelector(".wind");


const weatherBalloon2 = async (zipcode) => {
    try{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`)
        console.log(data);
        const formattedData = await data.json();
        console.log(formattedData);

    let newTemp = formattedData.main.temp;
    console.log("this is new temp", newTemp)
    temp.innerHTML = Math.floor(newTemp) + "&deg" + "F" ;
    let newCity = formattedData.name;
    city.innerHTML = newCity;
    let newHumidity ="Humidity: " + formattedData.main.humidity;
    humidity.innerHTML = newHumidity ;
    let newDescription = formattedData.weather[0].description;
    description.innerHTML = "Conditions: " + newDescription;
    let newWind ="Wind speed: " + formattedData.wind.speed;
    wind.innerHTML = newWind
}catch(error){
    console.log(error)
alert("Please enter a zip Code.")}
}


button.addEventListener("click", (evt) => {
    evt.preventDefault();
console.log('this is zip', zip);
weatherBalloon2(zip.value);
})
