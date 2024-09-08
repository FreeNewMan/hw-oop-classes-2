import {actors} from "../Character"
import Zombie  from "../Zombie ";

describe('Проверка класса Zombie ', () => { 
  test('Проверка создания', () => {
    const testObject = actors.filter(item => item.type==='Zombie')[0];
    expect(new Zombie (testObject)).toEqual(testObject);
  }); 
}); 
 
export default Zombie ;
