import React, { useEffect } from 'react';
import { ICharacterStats } from '../Components/StatsLayout/AtributteField/types/OptionAttribute';
import validadeFieldAttritube from '../Components/Table/utils/validadeFieldAtribute';
import { Api } from '../services/axiosConfig';
import { FieldValues, UseFormWatch } from 'react-hook-form';

interface MyGenericInterface {
    setValue: any
    watch: UseFormWatch<FieldValues>
    originAttributes: any
    classField: any
    attributes: any
  }

const useFetchHpMp = ({ setValue, watch, originAttributes, classField, attributes }:MyGenericInterface) => {
  const fetchHpMP = (haveError: boolean, attributesField: ICharacterStats, level: number) => {
    if (!haveError && attributesField && classField) {
      Api.post('/new/hp-mp', {
        class: classField,
        level: level,
        attributes: attributesField,
      }).then((res) => {
        setValue('HP', res.data.HP);
        setValue('MP', res.data.MP);
      });
    }
  };

  useEffect(() => {
    const attributesField = watch('attributes');
    const haveError = validadeFieldAttritube(attributesField, originAttributes);
    const level = 1;

    fetchHpMP(haveError, attributesField, level);
  }, [attributes, classField]);

};

export default useFetchHpMp;
