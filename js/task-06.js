



const textInput = document.querySelector("input");
const inputLengthConst = textInput.getAttribute("data-length");

console.log(inputLengthConst);

textInput.addEventListener("blur", (event) => {
console.log(event.currentTarget.value.length);

if (event.currentTarget.value.length == inputLengthConst){
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
    } 
    else 
    {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
    }
        
});
  
  



//   textInput.classList.add('valid')
 // textInput.value   = "";
  // textInput.style.borderColor = "#f44336";
//   console.log(Number.parseInt(textInputLength));
//   console.log(Number.parseInt(textInputLength));
// console.log(Number.parseInt(textInputLength.match(/\d+/)));


// let dataInput;

//   textInput.addEventListener("focus", () => {
// focus.preventDefault();


// textInput.value = "This input has focus";
// dataInput = textInput.textContent.length;
// console.log(dataInput);
// });