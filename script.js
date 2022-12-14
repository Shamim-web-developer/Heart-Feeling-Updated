var load = document.getElementById('load');
var container = document.getElementById('container');
var body = document.getElementById('body');
var div1 = document.getElementById('font');
var div2 = document.getElementById('back');
var icon = document.getElementById('icon');
var icon2 = document.getElementById('box');
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');


function pageload() {
  load.style.display = "none";
  container.style.display = "block";
  icon2.style.display = "block";
  body.style.backgroundImage = "url('bg.jpg')";
}

function btnclick() {
  div1.style.display = "none";
  div2.style.display = "block";
  icon.style.display = "block";
  icon2.style.display = "none";
  body.style.backgroundImage = "url('love.jpg')";
  audio1.pause();
  audio1.currentTime = 0;
  audio2.play();
}

function clicklogo() {
  div1.style.display = "block";
  div2.style.display = "none";
  icon.style.display = "none";
  icon2.style.display = "block";
  body.style.backgroundImage = "url('bg.jpg')";
  audio2.pause();
  audio2.currentTime = 0;
  audio1.play();
}

 function clickprofile() {
   document.location.href='comment/index.html';
 }