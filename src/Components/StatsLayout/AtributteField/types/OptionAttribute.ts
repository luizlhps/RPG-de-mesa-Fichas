export interface OptionAttribute {
  id: number;
  value: number;
  fieldCurrent: string | null;
}

export type TValidStatValue = 0 | 4 | 3 | 2 | 1 | null;
export interface ICharacterStats {
  CHA: TValidStatValue;
  WIS: TValidStatValue;
  DEX: TValidStatValue;
  CON: TValidStatValue;
  STR: TValidStatValue;
  INT: TValidStatValue;
}
