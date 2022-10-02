const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const elementsGallery = document.querySelector(".gallery");

const imageEl = images.map((image) =>`<li><img src = ${image.url} alt = ${image.alt}></img></li>`);

// console.log(imageEl);


elementsGallery.insertAdjacentHTML("afterend",imageEl.join(''));



const galleryClassEl = document.querySelector('ul');
galleryClassEl.style.alignItems = "center";
galleryClassEl.style.display = "flex";





// const galleryClassEl = document.querySelector('a');
// galleryClassEl.style.color = "red";



// elementsGallery.push(...imagesEl);



// const arrayImages = [];
// const option = images[0];

// const imagesEl = images.map(option =>{const imageEl = document.createElement("li")
// const imagesEl = images.map((option) =>`<li><img src = ${imageEl.src} alt = ${imageEl.alt}></img></li>`).join("");
// imageEl.src = option.url;
// imageEl.alt = option.alt;

// const galleryElement = document.createElement("li")
// imageEl.insertAdjacentHTML(afterbegin,`<li><img src = ${imageEl.src} alt = ${imageEl.alt}></img></li>`)
// console.log(galleryElement);

// galleryElement.insertAdjacentHTML(afterend, `<img src = ${imageEl.src} alt = ${imageEl.alt}></img>`);
// return imageEl;

// arrayImages.push(imageEl);
// console.log(arrayImages);
// const navEl = document.createElement("li");
// navEl.appendChild(imageEl);
// navEl.insertAdjacentHTML(afterbegin, text);
// arrayImages.push(navEl);

// galleryElement.insertAdjacentHTML(beforeend, `<img src = ${imageEl.src} alt = ${imageEl.alt}></img>`);

// });

// console.log(imagesEl);
// elementsContainer.append(...imagesEl);
// console.log(elementsContainer);








// const imagesEl = document.createElement("li");


// elem.insertAdjacentHTML(position, string);
// document.querySelector('.container').appendChild(image)