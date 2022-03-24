// import _ from 'lodash';
import './style.css';
import List from './modules/list.js';
import Task from './modules/task.js';
import Store from './modules/store.js';

const toDoList = document.getElementById('list-container');
const addBtn = document.querySelector('.return');
let i = 0;

const ul = document.createElement('ul');
ul.classList.add('items');
ul.id = 'tasks';
toDoList.appendChild(ul);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const input = document.getElementById('description');
  if (description === '') {
    // list.alert('Book cannot be empty', 'danger');
  } else {
    const newTask = new Task(description, false, i += 1);
    List.add(newTask);
    Store.add(newTask);;
    Store.updateIndex();
  }
  input.value = '';
});

window.addEventListener('load', () => {
  List.display();
  Store.updateIndex();
});