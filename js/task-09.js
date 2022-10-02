function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBodyEl = document.querySelector("body");


console.log(colorBodyEl);
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click",  () =>  
{ 
  colorBodyEl.style.backgroundColor = getRandomHexColor();
console.log(getRandomHexColor());
  // let colorId = getRandomHexColor();


const colorId = getRandomHexColor();

const htmlColorEl = document.querySelector(".color");
htmlColorEl.innerHTML = colorId;
});