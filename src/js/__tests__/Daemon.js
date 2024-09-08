import {actors} from "../Character"
import Daemon from "../Daemon";

describe('Проверка класса Daemon', () => { 
  test('Проверка создания', () => {
    const testObject = actors.filter(item => item.type==='Daemon')[0];
    expect(new Daemon(testObject)).toEqual(testObject);
  }); 
}); 


