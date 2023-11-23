export interface IClasses {
    name: string
    id:number
}

export interface ISheet {
    name?: any;
    origin?: any;
    class?: any;
    level?: any;
    height?: any;
    weight?: any;
    hitPoints: number;
    manaPoints: number;
    defense: number;
    attributes: Attributes;
    elementalAffinities: ElementalAffinities;
    skills: Skill[];
    items: Items;
    abilities: ElementalAffinities;
  }
  
  export interface Items {
    equipped: ElementalAffinities;
    inventory: ElementalAffinities;
  }
  
  export interface Skill {
    name: string;
    trained: number;
    value: number;
    attributeKey: string;
  }
  
  export interface ElementalAffinities {
  }
  
  export interface Attributes {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
  }