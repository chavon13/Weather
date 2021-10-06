let zip = document.querySelector("#zipcode");
let button = document.getElementById("submit")


function weatherBalloon( zipCode ) {
    const key = '46fbf048ea77cec3537a94244ec91020';
    fetch('https://api.openweathermap.org/data/2.5/weather?zip='+zipCode+'&units=imperial'+'&appid='+key)  
    // .then( => response.json())
    .then(function(resp) { 
        let formattedData = resp.json();
        console.log(formattedData);
        return formattedData}) 
    .then(function(data) {
            drawWeather(data);
})
    /*.catch(function(error) {
        console.log(error)
    });*/
}
button.addEventListener("click", (evt) => {
    evt.preventDefault();
    console.log(zip);
    weatherBalloon(zip.value);
})
window.onload = function() {
    weatherBalloon( 30016 );
}

function drawWeather(info) {
    document.getElementById("description").innerHTML = info.weather[0].description;
    document.getElementById("temp").innerHTML = info.main.temp + "&deg;";
    document.getElementById("location").innerHTML = info.name;
}

