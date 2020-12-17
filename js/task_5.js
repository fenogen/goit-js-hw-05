'use strict';

class Car {
  static getSpecs(car) {
    console.log(car);
  };

  constructor(maxSpeed, price) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  };

  get price() {
    return this._price;
  };
  set price(newPrice) {
    this._price = newPrice;
  };

  turnOn() {
    return this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
    return this.isOn, this.speed;
  };

  accelerate(value) {
    this.speed = this.speed + value;
    if (this.speed <= this.maxSpeed) {
      return this.speed;
    } else {
      this.speed = 0;
      console.log('скорость > max');
    }
  };

  decelerate(value) {
    this.speed = this.speed - value;
    if (this.speed > 0) {
      return this.speed;
    } else {
      this.speed = 0;
      console.log('скорость < min');
    }
  };

  drive(hours) {
    if (this.isOn === true) {
      return this.distance = this.distance + hours * this.speed;
    } else {
      return console.log('Машина не заведена!!!');
    }
  };
}

const mustang = new Car(200, 2000);
console.log('Базовые характеристики машины:');
console.log(mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
console.log('Машина едет:');
Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
console.log('Машина остановилась:');
Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(`Старая цена машины: ${mustang.price} $`); // 2000
mustang.price = 4000;
console.log(`Новая цена машины: ${mustang.price} $`); // 4000
