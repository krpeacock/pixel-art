var wrapper = document.getElementById('wrapper');
var colors = document.getElementById('colors');

var currentColor;

function listenOn(){
    wrapper.addEventListener('click', function(e){
        if (e.target && e.target.matches("div.pixel")) {
        changeColor(e);
    }
})}
listenOn();                            

function pixels() {
    for (i = 0; i < 340; i++){
    var div = document.createElement('div');
    wrapper.appendChild(div);
    div.setAttribute("class", 'pixel');
}}
pixels();

function changeColor(e){
    e.target.setAttribute('class', `pixel ${currentColor}`);
    e.target.classList
}

function whichColor(){
    colors.addEventListener('click', function(e){
        if (e.target && e.target.matches("div.color")) {
        currentColor = e.target.id 
    }
})}
whichColor();