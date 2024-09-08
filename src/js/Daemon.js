import Character, {actors} from './Character';

class Daemon extends Character {
  constructor() {
    super(actors.filter(item => item.type==='Daemon')[0]);
    }
}
export default Daemon;

