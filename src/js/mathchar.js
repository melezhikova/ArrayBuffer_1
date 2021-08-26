import Character from './basic';

export default class MathCharacter extends Character {
    constructor(name, type) {
        super(name, type);
    }
  
    set stoned (state) {
      this.setStoned = state;
    }
  
    get stoned () {
      return this.setStoned;
    }
  
    set attackPower (cells) {
        this.cellsAttack = cells;
    }
    
    get attackPower () {
        this.baseAttack = this.attack - this.attack * (this.cellsAttack - 1) / 10;
        if (this.baseAttack > 0 && !this.stoned) {
            return this.baseAttack;
        } else if (this.baseAttack <= 0) {
            return 0;
        } else {
          this.totalAttack = this.baseAttack - Math.trunc(Math.log2(this.cellsAttack) * 5);
          if (this.totalAttack <= 0) {
              return 0;
          } else {
              return this.totalAttack;
          }
        }
    }
  
}