import Magician from "../Magician";
 
describe('Проверка класса Magician', () => { 
  test('Проверка создания', () => {
    const testObject =  {name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40};
    expect(new Magician('Magician')).toEqual(testObject);
  }); 
}); 

