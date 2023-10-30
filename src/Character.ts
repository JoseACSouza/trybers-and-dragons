import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(public name:string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, amount: getRandomInt(1, 10),
    };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get strength() {
    return this._strength;
  }

  get energy() {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    let damage = attackPoints - this.defense;
    damage = damage > 0 ? damage : 1;
    let leftLP = this.lifePoints - damage;
    leftLP = leftLP > 0 ? leftLP : -1;
    this._lifePoints = leftLP;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    const newMaxLP = this._maxLifePoints + getRandomInt(1, 10);
    this._strength = this.strength + getRandomInt(1, 10);
    this._dexterity = this.dexterity + getRandomInt(1, 10);
    this._defense = this.defense + getRandomInt(1, 10);
    this._energy = { type_: this.energy.type_, amount: 10 };
    this._maxLifePoints = newMaxLP <= this._race.maxLifePoints 
      ? newMaxLP : this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
  }
}