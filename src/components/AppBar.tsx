import React from 'react';
import {default as MuiAppBar} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const AppBar: React.FC = () => (
  <MuiAppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Reg2Reg - преобразование реестров
      </Typography>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
