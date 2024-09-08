import {actors} from "../Character"
import Swordsman from "../Swordsman";

describe('Проверка класса Swordsman', () => { 
  test('Проверка создания', () => {
    const testObject = actors.filter(item => item.type==='Swordsman')[0];
    expect(new Swordsman(testObject)).toEqual(testObject);
  }); 
}); 
 
export default Swordsman;
