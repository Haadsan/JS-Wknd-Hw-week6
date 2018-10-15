//  load the form first
document.addEventListener('DOMContentLoaded', () => {
  // console.log('loaded')
  // hook to form
  const newItemform = document.querySelector("#new-item-form");
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  // this will listen for the form submission and not the button
  // mdn event https://developer.mozilla.org/en-US/docs/Web/Events

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllButton);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
  // console.log(event);
  // console.dir(event);
  // event.target give us our form

  const dinosaurListItem = createDinosaurListItem(event);
  // grab
  const dinosaurList = document.querySelector('#dinosaur-list');
  dinosaurList.appendChild(dinosaurListItem);
  // console.log(event);
  // console.dir(event);
  event.target.reset();
}
// CREATE/Write
// debugger;
const createDinosaurListItem = function (event) {
  const dinosaurListItem = document.createElement('li');
  dinosaurListItem.classList.add('dinosaur-list-item');
  // this will add to the list of class for styling css


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

const handleDeleteAllButton = function (event) {
  const dinosaurList = document.querySelector('#dinosaur-list');
  dinosaurList.innerHTML = '';
}

//     const img = document.createElement("img");
// img.src = "/my_image.jpg";
// img.alt = "My alt tag";
// img.id = "someId";
