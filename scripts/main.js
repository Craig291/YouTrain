var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/youtrain.png') {
      myImage.setAttribute ('src','images/sagility-logo.png');
    } else {
      myImage.setAttribute ('src','images/youtrain.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to YouTrain, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to YouTrain, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
