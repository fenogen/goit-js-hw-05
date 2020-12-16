
'use strict';

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    const i = this.items.indexOf(item);
    return this.items.splice(i, 1);
  }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);
console.log(storage);

const items = storage.getItems();
console.log('Получаем массив текущих товаров:');
console.table(items);

storage.addItem('Дроид');
console.log('Добавляем в массив новый товар:');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.log('Удаляем из массива существующий товар:');
console.table(storage.items);