import Store from './store.js';

export default class List {
  static display() {
    const list = Store.getList();
    list.forEach((task) => List.add(task));
  }

  static add(task) {
    const ul = document.querySelector('.items');
    const li = document.createElement('li');
    li.classList.add('to-do');
    li.innerHTML = `
          <button class="check-box" title="check" alt="check"></button>
          <div class="to-do-item">
            <label class="item-text">${task.description}</label>
          </div>
          <button class="menu"></button>
    `;
    ul.appendChild(li);
  }

  static remove(task) {
//     if (task.classList.contains('delete')) {
//       task.parentElement.parentElement.remove();
//     }
  }
//   static alert(message, className) {
//     const DIV = document.createElement('div');
//     DIV.className = `alert alert-${className}`;
//     DIV.appendChild(document.createTextNode(message));
//     const CONTAINER = document.querySelector('.container');
//     const PAGE = document.querySelector('.add-new');
//     CONTAINER.insertBefore(DIV, PAGE);
//     setTimeout(() => document.querySelector('.alert').remove(), 1500);
//   }
}