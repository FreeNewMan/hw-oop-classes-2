import Character, {actors} from './Character';

class Magician extends Character {
  constructor() {
    super(actors.filter(item => item.type==='Magician')[0]);
    }
}
 
export default Magician;
