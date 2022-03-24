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
    localStorage.setItem('task', JSON.stringify(list));
  }

  static remove(index) {
    const list = Store.getList();
    list.forEach((task) => {
      if (task.index === index) {
        list.splice(index - 1, 1);
      }
    });
    localStorage.setItem('task', JSON.stringify(list));
    Store.updateIndex();
  }

  static updateIndex() {
    const list = Store.getList();
    let i = 0;
    for (let j = 0; j < list.length; j += 1) {
      i += 1;
      list[j].index = i;
    }
    localStorage.setItem('task', JSON.stringify(list));
  }

  static updateInput(value, task) {
    const list = Store.getList();
    list[task.index - 1].description = value;
    localStorage.setItem('task', JSON.stringify(list));
  }

  static updateState(index, bool) {
    const list = Store.getList();
    list[index].state = bool;
    localStorage.setItem('task', JSON.stringify(list));
  }
}