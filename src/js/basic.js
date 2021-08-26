const types = ['Daemon', 'Magician'];

export default class Character {
  constructor(name, type) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }

    if (!types.includes(type)) {
      throw new Error('Такого персонажа не существует');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
