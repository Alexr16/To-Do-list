export default class Store {
  static getList() {
    let list = [];
    if (localStorage.getItem('task') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('task'));
    }
    return list;
  }

  static add(task) {
    const list = Store.getList();
    list.push(task);
    Store.updateIndex();
    localStorage.setItem('task', JSON.stringify(list));
  }

  static remove(index) {
    const list = Store.getList();
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].index === index) {
        list.splice(index - 1, 1);
      }
    }
    localStorage.setItem('task', JSON.stringify(list));
  }

  static updateIndex() {
    const list = Store.getList();
    for (let j = 0; j < list.length; j += 1) {
      list[j].index = j + 1;
    }
    localStorage.setItem('task', JSON.stringify(list));
  }

  static updateInput(value, task) {
    const list = Store.getList();
    list[task.index - 1].description = value;
    localStorage.setItem('task', JSON.stringify(list));
  }

  static updateState(value, task) {
    const list = Store.getList();
    list[task.index - 1].state = value;
    localStorage.setItem('task', JSON.stringify(list));
  }

  static updateStorage() {
    const list = Store.getList();
    Store.updateIndex();
    localStorage.setItem('task', JSON.stringify(list));
  }

  static clearCompleted() {
    let list = Store.getList();
    list.forEach(() => {
      list = list.filter((task) => task.state !== true);
    });
    localStorage.setItem('task', JSON.stringify(list));
    Store.updateIndex();
  }
}