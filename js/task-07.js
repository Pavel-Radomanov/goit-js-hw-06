const controlEl = document.querySelector("#font-size-control");
console.log(controlEl);

controlEl.addEventListener("input",  () =>  
{ 
 
const rangeVarEl = controlEl.value;   
console.log(rangeVarEl)
let sizeTypeEl = document.querySelector("#text").style.fontSize = rangeVarEl + "px";

console.log(sizeTypeEl);
});





// const rangeVarEl = controlEl.getAttribute("range");
// const rangEl = document.querySelector('#text');
// const inputRange = rangEl.getAttribute("range")
// console.log(rangEl);
// rangeEl.addEventListener("change",  () =>  
// {    /* После отжатия кнопки мышки с ползунка */

// console.log(this.value)}, false);

// rangEl.addEventListener("input",  () =>  
// {    /* После отжатия кнопки мышки с ползунка */    
// console.log(this.value)}, false);


// typeEl.innerHtml = controlEl.value;

// controlEl.insertAdjacentHTML("beforeend", 'oninput="fun1()"');
// function fun1() {
// 	var rng=document.getElementById('font-size-control'); //rng - это Input
// 	var p=document.getElementById('text'); // p - абзац
// 	// p.innerHTML=rng.value;
//         console.log(rng.value);}