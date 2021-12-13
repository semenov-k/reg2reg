import React from 'react';
import Paper from '../components/Paper';
import Box from '@mui/material/Box';
import PaperTitle from '../components/PaperTitle';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import { Org } from '../services/orgs/orgs.interfaces';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CancelIcon from '@mui/icons-material/Cancel';

export enum OrgTaskStatus {
  IDLE, IN_PROGRESS, ERROR, DONE
}

export interface OrgRowDescriptor {
  org: Org,
  id: string,
  taskStatus: OrgTaskStatus
}

interface Props {
  onAddOrgPressed: () => void
  orgs: OrgRowDescriptor[]
  selectedOrgId: string
  onOrgSelected: (id: string) => void
  onDeleteRequested: (id: string) => void
  onUpdateRequested: (id: string) => void
  onFullResetRequested: () => void
}

const Orgs: React.FC<Props> = ({
  onAddOrgPressed,
  orgs,
  selectedOrgId,
  onOrgSelected,
  onDeleteRequested,
  onUpdateRequested,
  onFullResetRequested
}) => {
  const handleUpdateButtonClick = (orgId: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onUpdateRequested(orgId);
  }

  const handleDeleteButtonClick = (orgId: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDeleteRequested(orgId);
  }

  return (
    <Paper>
      <PaperTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box component="span" sx={{ mr: 2 }}>
            Организации
          </Box>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            color="success"
            onClick={() => onAddOrgPressed()}
          >
            Добавить
          </Button>
        </Box>
      </PaperTitle>
      <TableContainer sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                Название
              </TableCell>
              <TableCell>
                ИНН
              </TableCell>
              <TableCell align="right">
                Номер реестра
              </TableCell>
              <TableCell align="center">
                Статус задачи
              </TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orgs.map((orgDescriptor) => (
              <TableRow
                key={orgDescriptor.id}
                hover
                onClick={() => { onOrgSelected(orgDescriptor.id) }}
                selected={orgDescriptor.id === selectedOrgId}
                sx={{
                  '&:hover': {
                    cursor: 'pointer'
                  }
                }}>
                <TableCell padding="none">
                  {orgDescriptor.id === selectedOrgId
                    && <Box sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px'
                    }}>
                      <DoubleArrowIcon color="primary" fontSize="large" />
                    </Box>
                  }
                </TableCell>
                <TableCell>
                  {orgDescriptor.org.name}
                </TableCell>
                <TableCell>
                  {orgDescriptor.org.inn}
                </TableCell>
                <TableCell align="right">
                  {orgDescriptor.org.npp}
                </TableCell>
                <TableCell align="center">
                  {orgDescriptor.taskStatus === OrgTaskStatus.IDLE &&
                    <Tooltip title="Задача не запущена">
                      <RadioButtonUncheckedIcon color="disabled" />
                    </Tooltip>
                  }
                  {orgDescriptor.taskStatus === OrgTaskStatus.IN_PROGRESS &&
                    <Tooltip title="В процессе">
                      <HourglassTopIcon color="primary" />
                    </Tooltip>
                  }
                  {orgDescriptor.taskStatus === OrgTaskStatus.DONE &&
                    <Tooltip title="Задача завершена">
                      <CheckCircleIcon color="success" />
                    </Tooltip>
                  }
                  {orgDescriptor.taskStatus === OrgTaskStatus.ERROR &&
                    <Tooltip title="Ошибка">
                      <CancelIcon color="error" />
                    </Tooltip>
                  }
                </TableCell>
                <TableCell padding="none" align="right">
                  <Tooltip title={`Редактировать организацию "${orgDescriptor.org.name}"`}>
                    <IconButton onClick={handleUpdateButtonClick(orgDescriptor.id)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={`Удалить организацию "${orgDescriptor.org.name}"`}>
                    <IconButton color="error" onClick={handleDeleteButtonClick(orgDescriptor.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box textAlign="right">
      <Button
            variant="outlined"
            color="primary"
            onClick={() => onFullResetRequested()}
          >
            Сбросить все результаты
          </Button>
      </Box>
    </Paper>
  );
}

export default Orgs;
