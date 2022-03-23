let task = {};

function display(items, cont) {
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
    cont.appendChild(li);
  }
}

function add(description, state, index) {
  task = {
    description,
    state,
    index,
  };
}

export { add, display };
