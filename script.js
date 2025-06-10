

/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey} api key = 4fd0ed91f35e6502965ab3b9c3542fb2*/
 let getweather = async (city)=>{
    let weatherapi ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=199497ee553615c811b18c80ae4e7a5c&units=metric'; 
    let weatherobj = await fetch(weatherapi);
    let response = weatherobj.json();
    return response;
 }
 async function callweather(){
    const city = document.getElementById("city_name").value;
    console.log(city)
    getweather(city)
    .then((response)=>{
        console.log(response)
        showWeatherdata(response)
            })
    .catch((err) =>
    {
        console.log(err)
    })
    
 }
 showWeatherdata =(weather)=>{
    document.getElementById('city-name').innerText=weather.name;
    document.getElementById('weather-type').innerText=weather.weather[0].main;
    document.getElementById('temp').innerText=weather.main.temp;
    document.getElementById('min-temp').innerText=weather.main.temp_min;
    document.getElementById('max-temp').innerText=weather.main.temp_max;
    document.getElementById('country').innerText=weather.sys.country;

 }
 
  

 