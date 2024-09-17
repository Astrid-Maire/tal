/*
console.log("Math.random", Math.floor(Math.random() * (100 + 1)));
 det samme 
  console.log("Math.random", Math.ceil(Math.random() * 100));*/

window.addEventListener("load", skoleNumber);

function skoleNumber() {
  let number = Math.ceil(Math.random() * 100);
  document.querySelector("#number").textContent = number;
}

window.addEventListener("load", skoleNumber);
