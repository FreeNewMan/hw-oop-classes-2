import Bowerman from "../Bowerman";

describe('Проверка класса Bowerman', () => { 
  test('Проверка создания', () => {
    const testObject = {name: 'Bowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25};
    expect(new Bowerman('Bowerman')).toEqual(testObject);
  }); 
}); 
