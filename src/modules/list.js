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

    input.addEventListener('click', (e) => {
      li.classList.toggle('editable');
      btn.classList.toggle('hide');
      removeBtn.classList.toggle('hide');
      li.classList.toggle('edit-mode');
      if (li.classList.contains('editable')) {
        input.removeAttribute('readonly', 'readonly');
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
    });

    removeBtn.addEventListener('click', () => {
      ul.removeChild(li); //   Store.updateIndex();
      Store.remove(task.index);
      window.location.reload();
    });

    ul.appendChild(li);
    li.appendChild(checkbtn);
    li.appendChild(div);
    div.appendChild(input);
    li.appendChild(btn);
    li.appendChild(removeBtn);
    // li.appendChild(div);
    // li.innerHTML = `
    //       <button id="check-btn" class="check-box" title="check" alt="check"></button>
    //       <div class="to-do-item" id="label-task">
    //         <input type="text" class="item-text" value='${task.description}' >
    //       </div>
    //       <button class="menu" id="menu-btn"></button>
    // `;
    // ul.appendChild(li);
    // ul.insertBefore(li, ul.childNodes[0]);
    // document.querySelector('.item-text').addEventListener('click', this.editEvent());
    // // document.querySelectorAll('.item-text').forEach((n) => n.addEventListener('click', () => {
    // //   input.removeAttribute('readonly');
    // //   const menu = document.querySelectorAll('.menu');
    // //   const edit = document.querySelectorAll('.to-do');
    // //   menu.classList.toggle('menu');
    // //   menu.classList.toggle('delete');
    // //   edit.classList.toggle('edit-mode');
    // //   document.querySelector('.item-text').addEventListener('keypress', () => {
    // //     const description = document.getElementById('description').value;
    // //     Store.updateInput(description, task.index);
    // //   });
    // //   input.setAttribute('readonly');
    // }));
    // document.querySelectorAll('.check-box').forEach((n) => n.addEventListener('click', () => {
    //   const input = document.querySelector('.item-text');
    //   const check = document.querySelector('#check-btn');
    //   check.classList.toggle('check-box');
    //   check.classList.toggle('check-mark');
    //   input.classList.toggle('line');
    // //   if (task.state === false) {
    // //     Store.updateState(task.index, true);
    // //   } else {
    // //     Store.updateState(task.index, false);
    // //   }
    // }));
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