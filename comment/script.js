var load = document.getElementById('load');
var box = document.getElementById('box');
var box1 = document.getElementById('box-1');
var box2 = document.getElementById('box-2');


function pageload(){
  load.style.display="none";
  box.style.display="block";
  body.style.backgroundImage = "url('image/profile-bg.jpg')";
}

function clickclose(){
  history.back();
}

function cmton(){
  box1.style.display="none";
  box2.style.display="block";
}
function cmtoff(){
  box1.style.display="block";
  box2.style.display="none";
}
function gm(){
  document.location.href="server/gmail.html";
}
function fb(){
  document.location.href="server/facebook.html";
}
function btnclick(){
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const comment = document.getElementById('comment');
	if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()){
	}else 
	{
	  swal({
	    icon: "success",
	    title: "Successful!",
	    text: "Your message will be sent!",
	    timer: 2500
	  });
	}
}
