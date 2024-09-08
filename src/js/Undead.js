import Character, {actors} from './Character';

class Undead extends Character {
  constructor() {
    super(actors.filter(item => item.type==='Undead')[0]);
    }
}
 
export default Undead;
