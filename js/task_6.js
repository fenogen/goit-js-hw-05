


'use strict'; 


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.table(products);

const calculateTotalPrice = function (allProducts, productName) {

  for (const product of allProducts) {
    const sum = product.price * product.quantity;

    if (productName === product.name) {
      console.log(`Общая стоимость продукта "${product.name}" составляет: ${sum}`);
      return;
    }
  }
};

calculateTotalPrice(products, 'Радар'); // 5200

calculateTotalPrice(products, 'Дроид'); // 2800