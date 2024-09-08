import Daemon from "../Daemon"

describe('Проверка класса Daemon', () => { 
  test('Проверка создания', () => {
    const testObject =  {name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40};
    expect(new Daemon('Daemon')).toEqual(testObject);
  }); 
}); 



