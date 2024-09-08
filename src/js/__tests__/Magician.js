import {actors} from "../Character"
import Magician from "../Magician";

describe('Проверка класса Magician', () => { 
  test('Проверка создания', () => {
    const testObject = actors.filter(item => item.type==='Magician')[0];
    expect(new Magician(testObject)).toEqual(testObject);
  }); 
}); 
 
export default Magician;
