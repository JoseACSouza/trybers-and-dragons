import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints = 80;

  static instances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
}