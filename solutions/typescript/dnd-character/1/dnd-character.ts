export type Ability = {
  name: string;
  value: number;
  modifier: number;
};

export class DnDCharacter {
  // Define public instance properties expected by the tests
  public readonly strength: number;
  public readonly dexterity: number;
  public readonly constitution: number;
  public readonly intelligence: number;
  public readonly wisdom: number;
  public readonly charisma: number;
  public readonly hitpoints: number;

  constructor() {
    // Generate scores once per character instance
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    
    // Calculate hitpoints based on this instance's constitution modifier
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  // Generates a SINGLE ability score (rolls 4 dice, keeps highest 3)
  public static generateAbilityScore(): number {
    const rolls: number[] = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    
    return [...rolls]
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((sum, num) => sum + num, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
/* type Ability = {
  name: string;
  value: number;
  modifier: number;
};
export class DnDCharacter {
  public static generateAbilityScore(): number[] {
    const finalNo: number[] = []
    for (let i:number = 0; i <  6; i++) {
      const rolls: number[] = [];

      for (let i:number = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
      }
       const highestNo = [...rolls]
      .sort((a:number,b:number) => b-a)
      .slice(0,3)
      .reduce((sum: number , num : number) => sum + num)

      finalNo.push(highestNo);
    }     
    return finalNo;
  }

  public static getModifierFor(abilityValue: number): number {
     return Math.floor((abilityValue - 10) / 2);
  }
  public static getAbilities(): Ability[]  {
    const scores = this.generateAbilityScore();

    return [
      { name: "strength", value: scores[0] , modifier : this.getModifierFor(scores[0])},
      { name: "dexterity", value: scores[1] , modifier : this.getModifierFor(scores[1]) },
      { name: "constitution", value: scores[2] , modifier : this.getModifierFor(scores[2])},
      { name: "intelligence", value: scores[3] , modifier : this.getModifierFor(scores[3]) },
      { name: "wisdom", value: scores[4] , modifier : this.getModifierFor(scores[4]) },
      { name: "charisma", value: scores[5] , modifier : this.getModifierFor(scores[5]) }
    ]
  }
   public static hitpoints(): number {
     const abilities = this.getAbilities();

  const constitution = abilities.find(
    (ability) => ability.name === "constitution"
  );

  const constitutionValue = constitution ? constitution.value : 10;

  return 10 + this.getModifierFor(constitutionValue);
}
}
 */