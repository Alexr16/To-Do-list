// import _ from 'lodash';
import './style.css';

const toDoList = document.getElementById('list-container');
const list = [
  {
    description: 'Homeworks',
    completed: false,
    index: 1,
  },
  {
    description: 'Party',
    completed: false,
    index: 2,
  },
  {
    description: 'Pool',
    completed: false,
    index: 3,
  },
];

const ul = document.createElement('ul');
ul.classList.add('items');
toDoList.appendChild(ul);
function iterate(items) {
  for (let i = 0; i < items.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('to-do');
    li.innerHTML = `
        <button class="check-box" title="check" alt="check"></button>
        <div class="to-do-item">
          <label class="item-text">${items[i].description}</label>
        </div>
        <button class="menu"></button>
    `;
    ul.appendChild(li);
  }
}

iterate(list);