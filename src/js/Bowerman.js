import Character, {actors} from './Character';

class Bowerman extends Character {
  constructor() {
    super(actors.filter(item => item.type==='Bowerman')[0]);
    }
}
 
export default Bowerman;
