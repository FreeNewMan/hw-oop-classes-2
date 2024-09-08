import Swordsman from "../Swordsman";

describe('Проверка класса Swordsman', () => { 
  test('Проверка создания', () => {
    const testObject =  {name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10};
    expect(new Swordsman('Swordsman')).toEqual(testObject);
  }); 
}); 

