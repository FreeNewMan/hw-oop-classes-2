import Zombie  from "../Zombie ";

describe('Проверка класса Zombie', () => { 
  test('Проверка создания', () => {
    const testObject =  {name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10};
    expect(new Zombie('Zombie')).toEqual(testObject);
  }); 
}); 
