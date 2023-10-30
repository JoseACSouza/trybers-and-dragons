import Race from './Race';

export default class Halfling extends Race {
  public maxLifePoints = 60;

  static instances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}