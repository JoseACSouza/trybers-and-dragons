import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public energyType:EnergyType = 'mana';

  static instances = 0;

  constructor(name:string) {
    super(name);
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}