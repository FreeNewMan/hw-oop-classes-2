import Character, {actors} from './Character';

class Zombie extends Character {
  constructor() {
    super(actors.filter(item => item.type==='Zombie')[0]);
    }
}
 
export default Zombie;
