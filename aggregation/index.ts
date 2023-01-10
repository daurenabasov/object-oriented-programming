class Engine {
  drive() {
    console.log("Двигатель работает");
  }
}

class Wheel {
  drive() {
    console.log("колеса едут");
  }
}

class Freshener {}

class Flat {
  freshener: Freshener;
  constructor(freshener) {
    this.freshener = freshener;
  }
}

class Car {
  engine: Engine;
  wheels: Wheel[];
  freshener: Freshener;

  constructor(freshener) {
    // Агрегация
    this.freshener = freshener;
    //Композиция
    this.engine = new Engine();
    this.wheels.push(new Wheel()); // Самое важное здесь что все эти обьекты мы создаем внутри класса Кар, они не создаются где то вне
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
  }

  // Делегирование
  drive() {
    this.engine.drive();
    for (let i = 0; i < this.wheels.length; i++) {
      this.wheels[i].drive();
    }
  }
}

const bmw = new Car("Свежо");
bmw.drive();
