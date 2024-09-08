import Character, {actors} from './Character';

class Swordsman extends Character {
  constructor() {
    super(actors.filter(item => item.type==='Swordsman')[0]);
    }
}
 

export default Swordsman;
