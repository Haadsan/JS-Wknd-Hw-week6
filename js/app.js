//  load the form first
document.addEventListener('DOMContentLoad', () => {
  const newItemform = document.querySelector("#new-item-form");
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllButton);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
// console.log(event);
 // console.dir(event);
  const dinosaurListItem = createDinosaurListItem();
  const dinosaurList = document.querySelector('#dinosaur-list');
  dinosaurList.appendChild(dinosaurListItem);
  // console.log(event);
   // console.dir(event);
  event.target.reset();
}
// CREATE/Write
const createDinosaurListItem = function (event) {
  const dinosaurListItem = document.createElement('li');
  dinosaurListItem.classList.add('dinosaur-list-item');

  const dinosaurName = document.createElement('h2');
  dinosaurName.textContent = event.target.dinosaurName.value;
  dinosaurListItem.appendChild(dinosaurName);

  const diet = document.createElement('p');
  diet.textContent = event.target.diet.value;
  dinosaurListItem.appendChild(diet);

  const breed = document.createElement('p');
  breed.textContent = event.target.diet.value;
  dinosaurListItem.appendChild(breed);

  const continent = document.createElement('p')
  continent.textContent = event.target.continent.value;
  dinosaurListItem.appendChild(continent);

  return dinosaurListItem;
}

const handleDeleteAllClick = function (event) {
  const dinosaurList = document.querySelector('#dinosaur-list');
  dinosaurList.innerHTML = '';
}
