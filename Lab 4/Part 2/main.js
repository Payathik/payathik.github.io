const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const text = [
    "Interesting eye picture",
    "Random chemical reaction",
    "Dope flowers",
    "Ancient Egypt stuff",
    "Butterfly on leaf"
];
/* Looping through images */
for (let i = 0; i < imageArray.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', imageArray[i]);
  newImage.setAttribute('alt', text[i]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', () => {
    displayedImage.src = newImage.src;
    displayedImage.alt = newImage.alt;
});
}

// click

/* Wiring up the Darken/Lighten button */
