const API_KEY = 'e340c4aa8489e9a6c29ecb2971213140';
const loadTempreture = () =>{
    const input  = document.getElementById('input');
    const inputValue = input.value
    input.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => showThetemp(data))
}
const tempText = (id,text) =>{
    document.getElementById(id).innerText = text;
}
const showThetemp = temp =>{
    console.log(temp)
    if(temp.cod == '404'){
      alert('GIVE VALID CITY NAME')
    }else{
    tempText('city-name', temp.name)
    tempText('temp',temp.main.temp)
    tempText('clouds',temp.weather[0].main)
    const url  = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const images = document.getElementById('images');
    images.setAttribute('src', url)
}
}