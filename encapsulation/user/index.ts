function generateRandomId() {
  return this.generateRandom();
}

class User {
  private _username;
  private _password;
  private _id;

  constructor(username, password) {
    this._username = username;
    this._password = password;
    this._id = generateRandomId();
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get id() {
    // Id всегда статичный поэтому изменяться не может, поэтому юзернэйм и пароль мы можем перезаписывать, а id просто получать
    return this._id;
  }
}

const user = new User("ulbi", "1234");
// user.id = 5; // допустим id мы не можем изменить так как не сделали сеттер
user.username = "hello"; // мы можем изменить
