const colors = ["green", "red", "blue", "yellow", "black"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.onclick = function (e) 
{
    const randomnumner = getRandomNumber();
    document.body.style.background = colors[randomnumner];
    color.textContent = colors[randomnumner];

};

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  };
