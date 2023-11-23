import { useEffect, useState } from 'react';
import { ICharacterStats } from '../Components/StatsLayout/AtributteField/types/OptionAttribute';
import validadeFieldAttritube from '../Components/Table/utils/validadeFieldAtribute';
import { Api } from '../services/axiosConfig';
import { FieldValues, UseFormWatch } from 'react-hook-form';

interface MyGenericInterface {
  setValue: any;
  watch: UseFormWatch<FieldValues>;
  originAttributes: any;
  attributes: any;
}

const useFetchHpMPAndSkillsPoints = ({ setValue, watch, originAttributes, attributes }: MyGenericInterface) => {
  const [remainingOfSkilsPoints, setRemainingOfSkilsPoints] = useState<number | undefined>(0);
  const [skillsPoints, setSkillsPoints] = useState();
  const classField = watch('Classes');

  const fetchHpMPAndSkillsPoints = (haveError: boolean, attributesField: ICharacterStats, level: number) => {
    if (!haveError && attributesField && classField) {
      //hp and mp
      Api.post('/new/hp-mp', {
        class: classField,
        level: level,
        attributes: attributesField,
      }).then((res) => {
        setValue('HP', res.data.HP);
        setValue('MP', res.data.MP);
      });

      //skills points
      Api.post('/new/skill-points', {
        level: level,
        attributes: attributesField,
      }).then((res) => {
        setSkillsPoints(res.data.skill_points);
      });
    }
  };

  useEffect(() => {
    const attributesField = watch('attributes');
    const haveError = validadeFieldAttritube(attributesField, originAttributes);
    const level = 1;

    fetchHpMPAndSkillsPoints(haveError, attributesField, level);
  }, [attributes, classField]);

  return {
    skillsPoints,
    setRemainingOfSkilsPoints,
    remainingOfSkilsPoints,
  };
};

export default useFetchHpMPAndSkillsPoints;
