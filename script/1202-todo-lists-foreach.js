let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
      name: 'make dinner',
      dueDate: '20-10-2023'
    },
    {
      name: 'wash dishes',
      dueDate: '11-15-2023'
    }];


renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button 
        class = "delete-todo-button js-delet-todo-button"
      >Delete
      </button>
      `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delet-todo-button')
    .forEach((deletButton, index) => {
      deletButton.addEventListener('click', () =>{
      onclick = todoList.splice(index, 1);
        renderTodoList()} )
    });

  localStorage.setItem('todoList', JSON.stringify
  (todoList));
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => { addTodo(); });

function addTodo (){
  const inputElement = document.querySelector('.js-name-input');

  const dateInputElement = document.querySelector('.js-due-date-input');

  const name = inputElement.value;

  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
  localStorage.setItem('todoList', JSON.stringify
  (todoList));
}