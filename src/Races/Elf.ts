import Race from './Race';

export default class Elf extends Race {
  static maxLifePoints: number;
  public maxLifePoints = 99;

  static instances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}