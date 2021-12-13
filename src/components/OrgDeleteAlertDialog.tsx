import React from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { OrgsService } from '../services/orgs/orgs.service';

interface Props {
  open: boolean
  orgName?: string
  orgId?: string
  onClose: () => void
  onDelete: () => void
}

const OrgDeleteAlertDialog: React.FC<Props> = ({
  open,
  orgName,
  orgId,
  onClose,
  onDelete
}) => {
  const orgsService = React.useMemo(() => new OrgsService(), []);

  const handleDelete = () => {
    orgsService.remove(orgId!);
    onDelete();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Вы уверены что хотите удалить организацию "{orgName}"?
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button
          startIcon={<DeleteIcon/>}
          color="error"
          onClick={handleDelete}
          >Удалить</Button>
      </DialogActions>
    </Dialog>
  );
}

export default OrgDeleteAlertDialog;
