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

//   static remove(index) {
//     const list = Store.getList();
//     list.forEach((task) => {
//     //   if (task.index === id) {
//       list.splice(index - 1, 1);
//     //   }
//     });
//     localStorage.setItem('task', JSON.stringify(list));
//     this.updateId();
//   }

    // static updateId() {
    //   const BOOKS = Store.getBook();
    //   let i = 0;
    //   for (let j = 0; j < BOOKS.length; j += 1) {
    //     i += 1;
    //     BOOKS[j].id = i;
    //   }
    //   localStorage.setItem('books', JSON.stringify(BOOKS));
    // }
  }