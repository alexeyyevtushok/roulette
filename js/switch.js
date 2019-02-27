/*Variables*/
var bet = document.getElementsByClassName('bet')[0];
var range = document.getElementsByClassName('range')[0];
var sqrt = document.getElementsByClassName('roulette__sqrt')[0];
var wheel = document.getElementsByClassName('roulette__wheel')[0];
var triangle = document.getElementById('triangle');
var button = document.getElementsByClassName('roulette__button')[0];

/*Mouse enter and leave events*/
bet.onmouseenter = function(){
  onMouse(range,0,1,"#9acd53");
}

bet.onmouseleave = function () {
  offMouse(range);
}

range.onmouseenter = function(){
  onMouse(bet,1,0,"#555555");
}

range.onmouseleave = function () {
  offMouse(bet);
}

/*Function realistaion*/
function onMouse(type,opacitySqrt,opacityWh,background){
  type.style.pointerEvents = "none";
  type.style.opacity = 0.2;

  sqrt.style.opacity = opacitySqrt;
  wheel.style.opacity = opacityWh;
  triangle.style.opacity = opacityWh;

  button.style.background = background;

  range.style.transition = "all 1s ease";
  sqrt.style.transition = "all 1s ease";
  bet.style.transition = "all 1s ease";
  wheel.style.transition = "all 1s ease";
}
function offMouse(type){
  type.style.pointerEvents = "auto";
  type.style.opacity = 1;
}

