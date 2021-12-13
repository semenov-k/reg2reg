import { default as MuiPaper } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(2)
}));

export default Paper;
