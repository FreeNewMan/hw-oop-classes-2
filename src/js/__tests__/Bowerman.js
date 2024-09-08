import {actors} from "../Character"
import Bowerman from "../Bowerman";

describe('Проверка класса Bowerman', () => { 
  test('Проверка создания', () => {
    const testObject = actors.filter(item => item.type==='Bowerman')[0];
    expect(new Bowerman(testObject)).toEqual(testObject);
  }); 
}); 
