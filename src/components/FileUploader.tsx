import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  onFileChange: (file?: File | null) => void
  disabled: boolean
}

const FileUploader: React.FC<Props> = ({ onFileChange, disabled }) => {
  const [fileName, setFileName] = React.useState<string>();
  const fileInputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFileName(file?.name);
    onFileChange(file);
  }

  const handleUploadClick = () => {
    fileInputRef.current.click();
  }

  const handleFileInputClean = () => {
    setFileName(undefined);
    fileInputRef.current.value = '';
    onFileChange(null);
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <TextField
        disabled
        fullWidth
        variant="outlined"
        value={fileName || 'Файл не выбран'}
        label="Файл исходного реестра"
        size="small"
        sx={(theme) => ({
          flexGrow: 1,
          marginRight: theme.spacing(1)
        })}
      />
      {
        fileName
          ?
          <IconButton
            size="large"
            color="error"
            onClick={handleFileInputClean}
            disabled={disabled}
          >
            <ClearIcon />
          </IconButton>
          :
          <IconButton
            onClick={handleUploadClick}
            size="large"
            disabled={disabled}
          >
            <CloudUploadIcon />
          </IconButton>
      }
      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept=".xls,.xlsx"
      />
    </Box>
  )
}

export default FileUploader;
