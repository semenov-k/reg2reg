import React from 'react';
import FileUploader from './FileUploader';
import Paper from './Paper';
import Box from '@mui/material/Box';
import PaperTitle from './PaperTitle';
import ArticleIcon from '@mui/icons-material/Article';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';
import CircularProgress from '@mui/material/CircularProgress';
import DownloadIcon from '@mui/icons-material/Download';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

interface Props {
  loading: boolean
  resultFile?: File
  error?: string
  onTransformRequested: (sourceFile: File) => void
  onResetRequested: () => void
  onCancelTaskRequested: () => void
  selectedOrgExists: boolean
}

const RegisterTransform: React.FC<Props> = ({
  loading,
  resultFile,
  error,
  onTransformRequested,
  onResetRequested,
  onCancelTaskRequested,
  selectedOrgExists
}) => {
  const [sourceFile, setSourceFile] = React.useState<File | null>();

  const handleSourceFileChange = (file?: File | null) => {
    setSourceFile(file);
  }

  return (
    <Paper>
      <Box sx={{ mb: 2 }}>
        <PaperTitle>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <ArticleIcon color="primary" sx={{ mr: 2 }} />
            Формирование реестра
          </Box>
        </PaperTitle>
      </Box>
      {!selectedOrgExists &&
        <Box sx={{
          display: 'flex',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <NotInterestedIcon color="disabled" sx={{height: '64px', width: '64px'}} />
        </Box>
      }
      {selectedOrgExists && !loading && !resultFile && !error &&
        <>
          <Box sx={{ mb: 2 }}>
            <FileUploader disabled={loading} onFileChange={handleSourceFileChange} />
          </Box>

          <Button
            variant="contained"
            fullWidth
            startIcon={<CachedIcon />}
            size="large"
            disabled={!Boolean(sourceFile)}
            onClick={() => onTransformRequested(sourceFile!)}
          >
            Начать преобразование
          </Button>
        </>
      }
      {(resultFile || error) &&
        <>
          {resultFile &&
            <>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">
                  Файл результата: <strong>{resultFile!.name}</strong>
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  startIcon={<DownloadIcon />}
                  size="large"
                  href={URL.createObjectURL(resultFile!)}
                  download={resultFile.name}
                >
                  Скачать
                </Button>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Divider />
              </Box>
            </>
          }
          {error &&
            <Box sx={{ mb: 2 }}>
              <Alert severity="error">
                <AlertTitle>Ошибка!</AlertTitle>
                {error}
              </Alert>
            </Box>
          }
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={onResetRequested}
          >
            Сбросить результат
          </Button>
        </>
      }
      {loading &&
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <Box sx={{
            pt: 3,
            pb: 4,
          }}>
            <CircularProgress size={60} />
          </Box>
          <Button variant="outlined" color="error" onClick={onCancelTaskRequested}>
            Отменить
          </Button>
        </Box>
      }
    </Paper>
  )
}

export default RegisterTransform;
