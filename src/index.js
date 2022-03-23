// import _ from 'lodash';
import './style.css';
import List from './modules/list.js';
import Task from './modules/task.js';
import Store from './modules/store.js';

const toDoList = document.getElementById('list-container');
const addTask = document.querySelector('.add-item');
const addBtn = document.querySelector('.return');
let i = 0;
// const list = [
//   {
//     description: 'Homeworks',
//     completed: false,
//     index: 1,
//   },
//   // {
//   //   description: 'Party',
//   //   completed: false,
//   //   index: 2,
//   // },
//   // {
//   //   description: 'Pool',
//   //   completed: false,
//   //   index: 3,
//   // },
// ];

const ul = document.createElement('ul');
ul.classList.add('items');
toDoList.appendChild(ul);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const input = document.getElementById('description');
  // if (e.key === 'Enter') {
  // const tasks = add(description, false, i += 1);
  // display(task, ul);
  // }
  if (description === '') {
    list.alert('Book cannot be empty', 'danger');
  } else {
    const newTask = new Task(description, false, i += 1);
    List.add(newTask);
    Store.add(newTask);
    // Library.alert('Book Added', 'success');
    // Store.updateId();
  }
  input.value = '';
});

window.addEventListener('load', () => {
  List.display();
  // Store.updateId();
});