import  React from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

const PaperTitle: React.FC<Props> = ({ children }) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

export default PaperTitle;
