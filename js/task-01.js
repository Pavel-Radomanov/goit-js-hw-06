

const itemWithCategory = document.querySelector("#categories");

const liItemOfCategories = itemWithCategory.querySelectorAll("li.item");


console.log("Number of categories:", liItemOfCategories.length);

liItemOfCategories.forEach(function (elementOfCategore) {

console.log("Category:",elementOfCategore.firstElementChild.textContent);

const sumOfItemsCategores = elementOfCategore.querySelectorAll("li");

console.log("Elements:",  sumOfItemsCategores.length);
 
});






// console.log("Category:", elementWithHeadOfCategore.textContent);
// if (elementWithHeadOfCategore.hasAttribute("h2"))
// const elementWithHeadOfCategores = document.querySelectorAll("h2");

    // const list = document.querySelector("li.item");
    // console.log(list.firstElementChild.textContent);
   









// console.log(itemWithCategory);
 // console.log(elementWithHeadOfCategore);
// const  numberOfItems = headOfCategore.querySelectorAll('li');
// console.log(numberOfItems);
// console.log("Elements:", numberOfItems.length);
 
// const numberOf = itemWithCategory.querySelectorAll("li");
// console.log(numberOf);

// const head = headOfCategory.textContent("li.h2");


// console.log(headOfCategory.textContent);










// console.log(text.textContent);
// var el = document.querySelector('#test');
// var matches = el.querySelectorAll('div.highlighted > p');