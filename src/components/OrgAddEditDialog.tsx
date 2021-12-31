import React from 'react';
import yup from '../utils/validation';
import { useFormik } from "formik";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { OrgsService } from '../services/orgs/orgs.service';
import { Org } from '../services/orgs/orgs.interfaces';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid';
import { SNOTypes } from '../core/atol-xml-builder';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

interface OrgAddEditDialogBodyProps {
  orgId?: string
  onClose: () => void
  onSaveOrAdd: () => void
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  inn: yup.string().required().isINN(),
  sno: yup.string().required(),
  paymentAddress: yup.string().required()
});

const OrgAddEditDialogBody: React.FC<OrgAddEditDialogBodyProps> = ({
  orgId,
  onSaveOrAdd,
  onClose,
}) => {
  const isEditingForm = orgId !== undefined;

  const orgsService = React.useMemo(() => new OrgsService(), []);
  const [editingOrg, setEditingOrg] = React.useState<Org>();

  const formik = useFormik({
    initialValues: editingOrg || {
      name: '',
      email: '',
      inn: '',
      sno: SNOTypes.OSN,
      paymentAddress: ''
    } as Org,
    validationSchema,
    onSubmit: (values) => {
      if (isEditingForm) {
        orgsService.update(orgId, values);
      } else {
        orgsService.create(values)
      }
      onSaveOrAdd();
    },
    enableReinitialize: true
  })

  React.useEffect(() => {
    if (orgId) {
      const org = orgsService.getById(orgId);
      setEditingOrg(org);
    }
  }, [orgId, orgsService]);

  const dialogTitle = !isEditingForm 
    ? 'Добавление организации' 
    : `Изменение организации "${editingOrg && editingOrg.name}"`;

  return (
    <>
      <DialogTitle>
        {dialogTitle}
      </DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="org.name"
                name="name"
                label="Название"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={(formik.touched.name && formik.errors.name) || ' '}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="sno_type">
                  Система налогооблажения
                </InputLabel>
                <Select
                  labelId="sno_type"
                  name="sno"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sno}
                  label="Система налогооблажения"
                >
                  <MenuItem value={SNOTypes.OSN}>Основная</MenuItem>
                  <MenuItem value={SNOTypes.ENVD}>Единый налог на вмененный доход</MenuItem>
                  <MenuItem value={SNOTypes.ESN}>Единый сельскохозяйственный налог</MenuItem>
                  <MenuItem value={SNOTypes.USN_INCOME}>Упрощенная (доходы)</MenuItem>
                  <MenuItem value={SNOTypes.USN_INCOME_OUTCOME}>Упрощенная (доходы - расходы)</MenuItem>
                  <MenuItem value={SNOTypes.PATENT}>Патент</MenuItem>
                </Select>
                <FormHelperText> </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="org.inn"
                name="inn"
                label="ИНН"
                value={formik.values.inn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.inn && Boolean(formik.errors.inn)}
                helperText={(formik.touched.inn && formik.errors.inn) || ' '}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                fullWidth
                variant="outlined"
                name="email"
                label="Электронная почта"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={(formik.touched.email && formik.errors.email) || ' '}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                name="paymentAddress"
                label="Платежный web-адрес"
                value={formik.values.paymentAddress}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.paymentAddress && Boolean(formik.errors.paymentAddress)}
                helperText={(formik.touched.paymentAddress && formik.errors.paymentAddress) || ' '}
                autoComplete="off"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>
            Отмена
          </Button>
          <Button
            type="submit"
            color="success"
            startIcon={!isEditingForm ? <AddIcon /> : <SaveIcon />}
          >
            {!isEditingForm ? 'Добавить' : 'Сохранить'}
          </Button>
        </DialogActions>
      </form>
    </>
  );
};

interface OrgAddEditDialogProps extends OrgAddEditDialogBodyProps {
  open: boolean
};

const OrgAddEditDialog: React.FC<OrgAddEditDialogProps> = ({ open, onClose, ...bodyProps }) => (
  <Dialog open={open} onClose={onClose}>
    <OrgAddEditDialogBody onClose={onClose} {...bodyProps}/>
  </Dialog>
)

export default OrgAddEditDialog;
