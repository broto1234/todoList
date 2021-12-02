const inputField = document.getElementById('inputField');
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function() {
  const para = document.createElement('p');
  para.classList.add('paraStyle');
  para.innerText = inputField.value;
  if (inputField.value === '') {
    alert('Your input is empty!!!');
  } else {
    toDoContainer.appendChild(para);
  }
  inputField.value = "";

  const deletePara = document.createElement('span');
  deletePara.classList.add('deleteStyle');
  deletePara.innerText = "\u00D7";
  para.appendChild(deletePara); 

  para.addEventListener('click', function() {
    para.classList.toggle('pChecked');
  })

  deletePara.addEventListener('click', function() {
    toDoContainer.removeChild(para);
  })

})
