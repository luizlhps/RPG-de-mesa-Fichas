import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { TableComponent } from '..';
import { Skill } from '../../../services/types';
import { useEffect } from 'react';

interface IProps {
  rows: Skill[];
  quantityMax: number | undefined;
  setValue: UseFormSetValue<FieldValues>;
  watch: any;
  setRemainingOfSkilsPoints: any;
}

export const SkillsTable = ({ rows, quantityMax, setValue, watch, setRemainingOfSkilsPoints }: IProps) => {
  useEffect(() => {
    setValue('skills', rows);
  }, []);

  const rowsSkill = watch('skills');

  const lengthRowsTrained = (): number => {
    let length = 0;

    if (rowsSkill)
      rowsSkill.forEach((row: any) => {
        if (row.trained === 1) length++;
      });

    return length;
  };

  const handleTrainedSkill = (item: any) => {
    const changeValue = rowsSkill.map((row: Skill) => {
      if (row.name === item.name && row.trained === 0) return { ...row, trained: 1 };
      if (row.name === item.name && row.trained === 1) return { ...row, trained: 0 };

      return row;
    });

    setValue('skills', changeValue);
  };

  useEffect(() => {
    setRemainingOfSkilsPoints(quantityMax ? quantityMax - lengthRowsTrained() : undefined);
  }, [lengthRowsTrained(), quantityMax]);

  return (
    <>
      <TableComponent.Root>
        <TableComponent.Header field='PERICIAS' secondField='NIVEIS' />
        <TableComponent.Content
          rowCondition={1}
          hiddenIconRowCondition={quantityMax ? quantityMax > lengthRowsTrained() : true}
          rowFieldCondition='trained'
          fn={handleTrainedSkill}
          rowsName='name'
          field='trained'
          secondField='value'
          rows={rowsSkill ?? rows}
        ></TableComponent.Content>
        <TableComponent.Footer />
      </TableComponent.Root>
    </>
  );
};
