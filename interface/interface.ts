class User {
  username: string;
  age: number;
}

interface Repository<T> {
  // Тип <T> это что-то обобщенное и это что-то приходит из вне
  create: (obj: T) => T;
  get: (obj: T) => T;
  delete: (obj: T) => T;
  update: (obj: T) => T;
}

class Car {}

class UserRepo implements Repository<User> {
  // тип юзер мы указываем то что именно он будет находится внутри класса UserRepo
  // Делаем имлементацию методов и у нас везде тип Юзер
  create(obj: User): User {
    return undefined;
  }

  get(obj: User): User {
    return undefined;
  }
  delete(obj: User): User {
    return undefined;
  }
  update(obj: User): User {
    return undefined;
  }
}

class CarRepo implements Repository<Car> {
  create(obj: Car): Car {
    return undefined;
  }

  get(obj: Car): Car {
    return undefined;
  }
  delete(obj: Car): Car {
    return undefined;
  }
  update(obj: Car): Car {
    return undefined;
  }
}
