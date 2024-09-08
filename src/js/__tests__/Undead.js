import Undead from "../Undead";

describe('Проверка класса Undead', () => { 
  test('Проверка создания', () => {
    const testObject =  {name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25};
    expect(new Undead('Undead')).toEqual(testObject);
  }); 
}); 

