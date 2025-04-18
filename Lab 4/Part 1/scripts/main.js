// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
var storyText = ["It was 94 fahrenheit outside, so xItem went for a walk. When they got to yItem, they stared in horror for a few moments, then zItem Bob saw the whole thing, but was not surprised — xItem weighs 300 pounds, and it was a hot day."]

const insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
console.log(insertx);

const inserty = ["the soup kitchen", "Disneyland","the White House"];
console.log(inserty);

const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
console.log(insertz);    


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);
  
  if(customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  newStory = newStory.replaceAll("xItem", xItem);
  newStory = newStory.replaceAll("yItem", yItem);
  newStory = newStory.replaceAll("zItem", zItem);
  
  story.textContent = newStory ;
  story.style.visibility = 'visible';

}
