class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon' ];
   
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя игрока должно быть длиной от 2 до 10 символов')
    } else {
      this.name = name;
    }
    if (!types.includes(type)) {
      throw new Error('Неизвестный персонаж')
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
  
  levelUp() {
    this.level +=1;
    this.attack += this.attack*0.2;
    this.defence += this.defence*0.2;
    this.health = 100;
  }
  
  damage(points) {
    if (this.health > 0) {
      this.health = this.health -= points * (1 - this.defence / 100);
    }
  }

}

export default Character;


