import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  public energyType:EnergyType = 'stamina';

  static instances = 0;

  constructor(name:string) {
    super(name);
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}