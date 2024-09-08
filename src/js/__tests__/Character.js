import Character from "../Character";

describe('Проверка класса Character', () => { 
  test('Проверка длины имени наименьшее ', () => {
    expect(() => new Character('B','Bowerman')).toThrowError("Имя игрока должно быть длиной от 2 до 10 символов")
  });
  test('Проверка длины имени наибольшее ', () => {
    expect(() => new Character('BowermanBowerman','Bowerman')).toThrowError("Имя игрока должно быть длиной от 2 до 10 символов")
  });
  test('Проверка типа персонажа', () => {
    expect(() => new Character('Noname', 'Noname')).toThrowError("Неизвестный персонаж")
  });

  test('Проверка расчета здоровья после нанесения ущерба', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attack = 10;
    actorCheck.defence = 40;
    actorCheck.damage(10);
    let result = actorCheck.health;
    expect(result).toBe(94);
  });

  test('Проверка здоровья со значением 0', () => {
     let actorCheck = new Character('Magician', 'Magician');
     actorCheck.attack = 10;
     actorCheck.defence = 40;
     actorCheck.health = 0;
     actorCheck.damage(10);
     expect(actorCheck.health).toBe(0);
   });

   test('Проверка повышения уровня ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attack = 50;
    actorCheck.attack = 10;
    actorCheck.defence = 40;
    actorCheck.levelUp();
    expect(actorCheck).toEqual({name: 'Magician', type: 'Magician', health: 100, level: 2, attack: 12, defence: 48});
  });


}); 
