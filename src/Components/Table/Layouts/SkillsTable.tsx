import { useTheme } from '@mui/material';
import { TableComponent } from '..';
import { Skill } from '../../../services/types';
import { useState } from 'react';

interface IProps {
  rows: Skill[];
}

export const SkillsTable = ({ rows }: IProps) => {
  const [rowsSkill, setRowsSkill] = useState(rows);

  const handleTrainedSkill = (item: any) => {
    console.log(item);

    const changeValue = rowsSkill.map((row) => {
      if (row.name === item.name && row.trained === 0) return { ...row, trained: 1 };
      if (row.name === item.name && row.trained === 1) return { ...row, trained: 0 };
      return row;
    });

    setRowsSkill(changeValue);
  };

  return (
    <>
      <TableComponent.Root>
        <TableComponent.Header field='PERICIAS' secondField='NIVEIS' />
        <TableComponent.Content
          rowCondition={1}
          rowFieldCondition='trained'
          fn={handleTrainedSkill}
          rowsName='name'
          field='trained'
          secondField='value'
          rows={rowsSkill}
        ></TableComponent.Content>
        <TableComponent.Footer />
      </TableComponent.Root>
    </>
  );
};
