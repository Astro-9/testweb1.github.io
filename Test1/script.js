// Image changing
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'Image/chrome.jfif') {
    myImage.setAttribute('src', 'Image/ig.jfif');
  } else {
    myImage.setAttribute('src', 'image/chrome.jfif');
  }
};


// Adding a personalize welcome message
let myButton = document.querySelector('#btn');
let myHeading = document.querySelector('h1');

function setUserName() { // get user's name when they first get in to web
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem('name')) { // web stroage to store user's name
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() { // set username
  setUserName();
};


//
