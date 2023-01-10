class Person {
  private _firstName;
  private _lastName;
  private _age;

  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  public greeting() {
    console.log(`Hello i'am Person and my name is ${this._firstName}`);
  }

  public get fullName() {
    return console.log(
      `LastName is ${this._lastName} and my name is ${this._firstName}`
    );
  }
}

class Developer extends Person {
  private level;
  private language;

  constructor(firstName, lastName, age, level, language) {
    super(firstName, lastName, age);
    this.level = level;
    this.language = language;
  }

  public greeting() {
    `Hello i'am Developer, my name is ${this.fullName}`;
  }
}
const person = new Person("Person", "Human", 20);
const developer = new Developer("Developer", "Developer", 19, "3", "middle");

console.log(developer.greeting());
console.log(person.greeting());
