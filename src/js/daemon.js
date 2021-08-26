import MathCharacter from './mathchar';

export default class Daemon extends MathCharacter {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
