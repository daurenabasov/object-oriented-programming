class Person {
  private _firstName;
  private _lastName;
  private _age;

  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  public get fullName() {
    return `name: ${this._firstName} ${this._lastName}`;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    if (value < 0) {
      this._age = 0;
    } else {
      this._age = value;
    }
  }
}

class Employee extends Person {
  private inn;
  private number;
  private snils;

  constructor(firstName, lastName, age, inn, number, snils) {
    super(firstName, lastName, age);
    this.inn = inn;
    this.number = number;
    this.snils = snils;
  }
}

const employee1 = new Employee("name", "lastName", 19, 10, 9964214124, 21323);

// console.log(employee1);

class Developer extends Employee {
  private level;
  private language;
  constructor(firstName, lastName, age, inn, number, snils, level, language) {
    super(firstName, lastName, age, inn, number, snils);
    this.level = level;
    this.language = language;
  }
}

const ulbiTv = new Developer(
  "React",
  "TS",
  "4",
  "14314",
  12413,
  13414,
  "Middle",
  "Typescript"
);
console.log(ulbiTv.fullName);
