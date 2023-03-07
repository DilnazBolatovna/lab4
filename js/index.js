let music = ["Samsmitch", "howdoyousleep"];
let city = ["Saul", "LosAnjales"];
let musicJanr = ["pop", "rap"];

const about = {
    name: 'Dilnaz',
    surname: 'Bolatovna',
    age: 18
}

function writing() {
    return about.name;
}
const cont = document.querySelector("#one");
const two = document.querySelector('#two')
for (let i = 0; i < music.length; i++){
    cont.innerHTML += `${music[i] + " " + city[i] + " " + musicJanr[i] + " " + "<br>"}`;
}
for (let i = 0; i < 1; i++){
    two.innerHTML += `${about.name + " " + about.surname + " " + about.age}`
}
two.innerHTML += `<br>My name is ${writing()}, I am a ${about.age} years ago`;

