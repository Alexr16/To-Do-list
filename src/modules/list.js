import Store from './store.js';

export default class List {
  static display() {
    const list = Store.getList();
    list.forEach((task) => List.add(task));
  }

  static add(task) {
    const ul = document.querySelector('#tasks');

    const li = document.createElement('li');
    li.classList.add('li-task');
    li.classList.add('to-do');

    const checkbtn = document.createElement('button');
    checkbtn.classList.add('check-box');
    checkbtn.id = 'check-btn';
    checkbtn.alt = 'check';
    checkbtn.title = 'check';

    const div = document.createElement('div');
    div.classList.add('to-do-item');
    div.id = 'label-task';

    const input = document.createElement('input');
    input.classList.add('item-text');
    input.type = 'text';
    input.setAttribute('contenteditable', 'true');
    input.setAttribute('readonly', 'readonly');
    input.value = task.description;

    const btn = document.createElement('button');
    btn.classList.add('menu');
    btn.id = 'menu-btn';

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('delete');
    removeBtn.classList.add('hide');
    removeBtn.id = 'remove-btn';

    input.addEventListener('click', () => {
      li.classList.toggle('editable');
      btn.classList.toggle('hide');
      removeBtn.classList.toggle('hide');
      li.classList.toggle('edit-mode');
      if (li.classList.contains('editable')) {
        input.removeAttribute('readonly', 'readonly');
        Store.updateIndex();
      }
    });

    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        li.classList.toggle('editable');
        btn.classList.toggle('hide');
        removeBtn.classList.toggle('hide');
        li.classList.toggle('edit-mode');
        const item = e.target.value;
        Store.updateInput(item, task);
        input.setAttribute('readonly', 'readonly');
      }
    });

    checkbtn.addEventListener('click', () => {
      checkbtn.classList.toggle('check-box');
      checkbtn.classList.toggle('check-mark');
      input.classList.toggle('line');
      let value;
      if (checkbtn.classList.contains('check-mark')) {
        value = true;
        Store.updateState(value, task);
      } else {
        value = false;
        Store.updateState(value, task);
      }
      Store.updateStorage();
    });

    const clear = document.querySelector('.clear-list');
    clear.addEventListener('click', () => {
      if (checkbtn.classList.contains('check-mark')) {
        Store.clearCompleted();
        ul.removeChild(li);
      }
      Store.updateStorage();
    });

    removeBtn.addEventListener('click', () => {
      ul.removeChild(li);
      Store.remove(task.index);
      Store.updateIndex();
      window.location.reload();
    });

    ul.appendChild(li);
    li.appendChild(checkbtn);
    li.appendChild(div);
    div.appendChild(input);
    li.appendChild(btn);
    li.appendChild(removeBtn);
  }

  static alert(message, className) {
    const DIV = document.createElement('div');
    DIV.className = `alert alert-${className}`;
    DIV.appendChild(document.createTextNode(message));
    const CONTAINER = document.querySelector('.container');
    const PAGE = document.querySelector('.add-new');
    CONTAINER.insertBefore(DIV, PAGE);
    setTimeout(() => document.querySelector('.alert').remove(), 1500);
  }
}