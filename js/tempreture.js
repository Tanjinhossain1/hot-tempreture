const API_KEY = 'e340c4aa8489e9a6c29ecb2971213140';
const loadTempreture = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;
    input.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => displayTempreture(data))
}
const setText = (id, text) =>{
    document.getElementById(id).innerText = text;
}
const displayTempreture = temp =>{
    if(temp.cod == '404'){
        alert('Search a Valid City Name')
    }else{
    setText('city-name', temp.name)
    setText('temp', temp.main.temp)
    setText('clouds', temp.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    let images = document.getElementById('images')
    images.setAttribute('src',url)
}
}