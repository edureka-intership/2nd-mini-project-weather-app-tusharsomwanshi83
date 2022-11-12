let result = []

function callApi() {
    let city = document.getElementById("city").value
    fetch(`http://api.weatherstack.com/current?access_key=43cee008ff108817de317d40d3409c79&query=${city}`, { method: 'GET' })
    .then(response => response.json())
    .then(data =>{
        result = data;
        resulttothepage();
    })
}

function callAPIDefault(){
    try {
        
        fetch(`http://api.weatherstack.com/current?access_key=43cee008ff108817de317d40d3409c79&query=Mumbai`, { method: 'GET' })
        .then(response => response.json())
        .then(data =>{
            result = data;
            resulttothepage();
        })
    } 
    catch (error) {
        alert(error)
    }
}

function resulttothepage(){
    if(result.success==false){
        alert("Currently we are not avilable please try after some time",result.error);
    }
    
    else{
        document.getElementById('cityname').innerHTML ="Whether in "+result.location.name
        document.getElementById('celcius').innerHTML=result.current.temperature+"°C"
        document.getElementById('weather_descriptions').innerHTML=result.current.weather_descriptions
        document.getElementById('humidity').innerHTML="Humidity: "+result.current.humidity+"%"
        document.getElementById('wind_speed').innerHTML="Wind Speed : "+result.current.wind_speed+" km/h"
        let source=result.current.weather_icons[0]
        document.getElementById('imgs').src=source

    }
}
