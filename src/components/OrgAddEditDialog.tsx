import React from 'react';
import yup from '../utils/validation';
import { useFormik } from "formik";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { OrgsService } from '../services/orgs/orgs.service';
import { Org } from '../services/orgs/orgs.interfaces';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility'
import AddIcon from '@mui/icons-material/Add';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid';

interface OrgAddEditDialogBodyProps {
  orgId?: string
  onClose: () => void
  onSaveOrAdd: () => void
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  inn: yup.string().required().isINN(),
  api_key: yup.string().required(),
  npp: yup.number().integer().required()
});

const OrgAddEditDialogBody: React.FC<OrgAddEditDialogBodyProps> = ({
  orgId,
  onSaveOrAdd,
  onClose,
}) => {
  const isEditingForm = orgId !== undefined;

  const orgsService = React.useMemo(() => new OrgsService(), []);
  const [editingOrg, setEditingOrg] = React.useState<Org>();
  const [apiKeyIsVisible, setApiKeyIsVisible] = React.useState(false);

  const formik = useFormik({
    initialValues: editingOrg || {
      name: '',
      inn: '',
      api_key: '',
      npp: 1
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

  const handleClickShowApiKey = () => setApiKeyIsVisible(!apiKeyIsVisible);

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
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="org.api_key">Ключ API</InputLabel>
                <OutlinedInput
                  type={apiKeyIsVisible ? 'text' : 'password'}
                  id="org.api_keu"
                  name="api_key"
                  label="Ключ API"
                  value={formik.values.api_key}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.api_key && Boolean(formik.errors.api_key)}
                  autoComplete="off"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowApiKey}
                        edge="end"
                      >
                        {apiKeyIsVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText error={formik.touched.api_key && Boolean(formik.errors.api_key)}>
                  {(formik.touched.api_key && formik.errors.api_key) || ' '}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                name="npp"
                label="Порядковый номер реестра"
                value={formik.values.npp}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.npp && Boolean(formik.errors.npp)}
                helperText={(formik.touched.npp && formik.errors.npp) || 'Будет указываться в названии реестра'}
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
