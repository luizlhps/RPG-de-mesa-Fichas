import { TableComponent } from '..';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';




interface IAbility {
  rows: any;
}

export const AttacksTable = ({ rows }:IAbility) => {
  return (
    <TableComponent.Root>
      <TableComponent.Header field='ATAQUES' />
      <TableComponent.ContentCustom rows={rows} rowField='name' height={160}>
        <AccessibleForwardIcon onClick={() => console.log('oi')}></AccessibleForwardIcon>
      </TableComponent.ContentCustom>
      <TableComponent.Footer />
    </TableComponent.Root>
  );
};
