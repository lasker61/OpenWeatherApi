document.getElementById('btn').addEventListener('click',function(){
    const inputValue = document.getElementById('inputValue').value;
    getWeather(inputValue);
})
function getWeather(inputValue){
    const apiKey = '386161534e2003849009d9a761e32f5b';
    const apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    const apiCall = `${apiLink}?q=${inputValue}&units=metric&appid=${apiKey}`;
    console.log('url',apiCall);
    fetch(apiCall)
        .then(response => response.json())
        .then(data => setData(data))
 }
 function setData(data){
    console.log('data',data.name);
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('weather-info').innerText = data.weather[0].main;
    document.getElementById('image-icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = '';

}