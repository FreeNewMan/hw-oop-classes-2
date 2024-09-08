import {actors} from "../Character"
import Undead from "../Undead";

describe('Проверка класса Undead', () => { 
  test('Проверка создания', () => {
    const testObject = actors.filter(item => item.type==='Undead')[0];
    expect(new Undead(testObject)).toEqual(testObject);
  }); 
}); 
 
export default Undead;
