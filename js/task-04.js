let counterValue = 0;

const onDecrementBtn = document.querySelectorAll("button")[0];
const onIncrementBtn = document.querySelectorAll("button")[1];




const handleClickDecrement = () => {
  counterValue = counterValue - 1;
  console.log(counterValue);

  let elementValue = document.querySelector("#value");
  elementValue.textContent = counterValue;}
  
  
  onDecrementBtn.addEventListener("click", handleClickDecrement);

  const handleClickIncrement = () => {
  counterValue = counterValue + 1;
  console.log(counterValue);

  let elementValue = document.querySelector("#value");
  elementValue.textContent = counterValue;
  };
  
  onIncrementBtn.addEventListener("click", handleClickIncrement);

  
