const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const heading = document.createElement("h1");
console.log(heading);

const elementsContainer = document.querySelector("#ingredients");
let elements = [];

for (let i = 0; i < ingredients.length; i += 1){
  // console.log(ingredients[i]);
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredients[i];
  ingredientEl.classList.add("item");

   elements.push(ingredientEl);
};

console.log(elements);

elementsContainer.append(...elements);







// const elementsContainer = document.querySelector("ingredients");
// elementsContainer.append(...elements);


// const elements = ingredients.map(ingredient =>{
//   const element = document.createElement("li")
//   element.textContent = 'ingredient';
//   element.classList.add("item");

//   elements.push(element);
//   })
//   console.log(elements);




// const ingredientEl = document.createElement("li");
// ingredientEl.textContent = 'Potatoes';
// ingredientEl.classList.add("item");
// console.log(ingredientEl);


