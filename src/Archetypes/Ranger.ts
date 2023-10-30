import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  public energyType:EnergyType = 'stamina';

  static instances = 0;

  constructor(name:string) {
    super(name);
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}