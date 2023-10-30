import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public energyType:EnergyType = 'mana';

  static instances = 0;

  constructor(name:string) {
    super(name);
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}