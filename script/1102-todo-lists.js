const todoList = [{
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

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button 
        onclick = "todoList.splice(${i}, 1);
          renderTodoList()"
        class = "delete-todo-button"
      >Delete
      </button>
      `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

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
}