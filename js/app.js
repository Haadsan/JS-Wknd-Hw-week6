//  load the form first

document.addEventListener('DOMContentLoad', () => {
  const newItemform = document.querySelector("#new-item-form");
  newItemform.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
// console.log(event);
 // console.dir(event);


  const dinosaurListItem = createDinosaurListItem(event.target);
  const dinosaurList = document.querySelector('#dinosaur-list');
  dinosaurList.appendChild(dinosaurListItem);
  // console.log(event);
   // console.dir(event);

  event.target.reset();
}


// CREATE
const createDinosaurListItem = function (form) {
  const dinosaurListItem = document.createElement('li');
  dinosaurListItem.classList.add('dinosaur-list-item');

  const dinasaurName = document.createElement('h2');
  dinasaurName.textContent = form.dinasaurName.value;
  dinosaurListItem.appendChild(dinosaurName);

  const diet = document.createElement('p');
  diet.textContent = form.diet.value;
  dinosaurListItem.appendChild(diet);
  console.log(form.diet.value);

  const breed = document.createElement('p');
  breed.textContent = form.diet.value;
  dinosaurListItem.appendChild(breed);

  const continent = document.createElement('p')
  continent.textContent = form.continent.value;
  dinosaurListItem.appendChild(continent);


  return dinosaurListItem;
}
