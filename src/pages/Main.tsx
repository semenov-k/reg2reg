import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import Orgs, { OrgRowDescriptor, OrgTaskStatus } from '../components/Orgs';
import OrgAddEditDialog from '../components/OrgAddEditDialog';
import OrgDeleteAlertDialog from '../components/OrgDeleteAlertDialog';
import { OrgsService } from '../services/orgs/orgs.service';
import { TransformService } from '../services/transform/transform.service';
import RegisterTransform from '../components/RegisterTransform';


interface TransformCurrentState {
  inProgress: boolean
  taskId: string
  resultFile?: File
  error?: string
}

enum TransformActionsTypes {
  SET_RESET, RESET_ALL, SET_IN_PROGRESS, SET_DONE, SET_ERROR
}

interface TransformAction {
  type: TransformActionsTypes,
  payload?: {
    orgId: string
    resultFile?: File
    error?: string
    taskId?: string
  }
}

type TransformState = { [k: string]: TransformCurrentState };

const transformReducer = (state: TransformState, action: TransformAction) => {
  switch (action.type) {
    case TransformActionsTypes.RESET_ALL:
      return {};
    case TransformActionsTypes.SET_RESET:
      const { [action.payload!.orgId!]: _, ...restTransformStates } = state;
      return restTransformStates;
    case TransformActionsTypes.SET_IN_PROGRESS:
      return {
        ...state, [action.payload!.orgId!]: {
          inProgress: true,
          taskId: action.payload!.taskId!
        }
      }
    case TransformActionsTypes.SET_DONE:
      return {
        ...state,
        [action.payload!.orgId!]:
        {
          inProgress: false,
          resultFile: action.payload!.resultFile!,
          taskId: state[action.payload!.orgId!].taskId
        }
      }
    case TransformActionsTypes.SET_ERROR:
      return {
        ...state,
        [action.payload!.orgId!]:
        {
          inProgress: false,
          error: action.payload!.error!,
          taskId: state[action.payload!.orgId!].taskId
        }
      }
    default:
      return state;
  }
}

const Main: React.FC = () => {
  const orgsService = React.useMemo(() => new OrgsService(), []);
  const transformService = React.useMemo(() => new TransformService(), []);

  const [transformState, transformDispatch] = React.useReducer(transformReducer, {});

  const [orgs, setOrgs] = React.useState(orgsService.getAll());
  const [selectedOrgId, setSelectedOrgId] = React.useState(Object.keys(orgs)[0]);

  const [orgIdForDelete, setOrgIdForDelete] = React.useState<string>();
  const [orgDeleteDialogIsOpen, setOrgDeleteDialogIsOpen] = React.useState(false);

  const [orgCreateOrUpdateDialogIsOpen, setOrgCreateOrUpdateDialogIsOpen] = React.useState(false);

  const [orgIdForUpdate, setOrgIdForUpdate] = React.useState<string>();

  const orgRowsDescriptors = React.useMemo(() => (Object.keys(orgs).map((orgId) => ({
    org: orgs[orgId],
    id: orgId,
    taskStatus: !transformState[orgId] ? OrgTaskStatus.IDLE :
      transformState[orgId].inProgress ? OrgTaskStatus.IN_PROGRESS :
        transformState[orgId].resultFile ? OrgTaskStatus.DONE : OrgTaskStatus.ERROR
  } as OrgRowDescriptor))), [orgs, transformState])

  const startTransformTask = async (sourceFile: File) => {
    const orgId = selectedOrgId;
    const taskId = uuidv4();

    transformDispatch({
      type: TransformActionsTypes.SET_IN_PROGRESS,
      payload: {
        taskId,
        orgId
      }
    });

    try {
      const resultFile = await transformService.startTransformationTask(taskId, sourceFile, orgs[selectedOrgId]);

      transformDispatch({
        type: TransformActionsTypes.SET_DONE,
        payload: {
          resultFile,
          orgId
        }
      });

    } catch (e: any) {
      transformDispatch({
        type: TransformActionsTypes.SET_ERROR,
        payload: {
          error: e.message,
          orgId
        }
      });

    }
  }

  const handleTransformResultReset = () => {
    transformDispatch({
      type: TransformActionsTypes.SET_RESET,
      payload: {
        orgId: selectedOrgId
      }
    });
  }

  const updateOrgsList = () => {
    const orgs = orgsService.getAll();
    setOrgs(orgs);
  }

  const handleAddOrgsPressed = () => {
    setOrgIdForUpdate(undefined);
    setOrgCreateOrUpdateDialogIsOpen(true);
  };

  const handleOrgModalClose = () => {
    setOrgCreateOrUpdateDialogIsOpen(false);
  };

  const handleOrgModelSaveOrAdd = () => {
    setOrgCreateOrUpdateDialogIsOpen(false);
    updateOrgsList();
  }

  const handleOrgSelection = (id: string) => {
    setSelectedOrgId(id);
  }

  const handleOrgDeletionAlertClose = () => {
    setOrgDeleteDialogIsOpen(false);
  }
  const handleOrgDeletionAlertDelete = () => {
    updateOrgsList();
    setOrgDeleteDialogIsOpen(false);
  }

  const handleDeleteRequest = (orgId: string) => {
    setOrgIdForDelete(orgId);
    setOrgDeleteDialogIsOpen(true);
  }

  const handleUpdateRequest = (orgId: string) => {
    setOrgIdForUpdate(orgId);
    setOrgCreateOrUpdateDialogIsOpen(true);
  }

  const handleFullReset = () => {
    transformDispatch({
      type: TransformActionsTypes.RESET_ALL,
    });
  }

  const handleCancelTask = () => {
    transformService.stopTransformationTask(transformState[selectedOrgId].taskId);

    transformDispatch({
      type: TransformActionsTypes.SET_RESET,
      payload: {
        orgId: selectedOrgId
      }
    });
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Orgs
            onAddOrgPressed={handleAddOrgsPressed}
            orgs={orgRowsDescriptors}
            selectedOrgId={selectedOrgId}
            onOrgSelected={handleOrgSelection}
            onDeleteRequested={handleDeleteRequest}
            onUpdateRequested={handleUpdateRequest}
            onFullResetRequested={handleFullReset}
          />
        </Grid>
        <Grid item xs={4}>
          <RegisterTransform
            selectedOrgExists={selectedOrgId !== undefined}
            key={selectedOrgId}
            loading={transformState[selectedOrgId] ? transformState[selectedOrgId].inProgress : false}
            resultFile={transformState[selectedOrgId]?.resultFile}
            error={transformState[selectedOrgId]?.error}
            onTransformRequested={startTransformTask}
            onResetRequested={handleTransformResultReset}
            onCancelTaskRequested={handleCancelTask}
          />
        </Grid>
      </Grid>
      <OrgAddEditDialog
        orgId={orgIdForUpdate}
        open={orgCreateOrUpdateDialogIsOpen}
        onClose={handleOrgModalClose}
        onSaveOrAdd={handleOrgModelSaveOrAdd}
      />
      <OrgDeleteAlertDialog
        open={orgDeleteDialogIsOpen}
        orgId={orgIdForDelete}
        orgName={orgIdForDelete && orgs[orgIdForDelete] && orgs[orgIdForDelete].name}
        onClose={handleOrgDeletionAlertClose}
        onDelete={handleOrgDeletionAlertDelete}
      />
    </>
  );
}

export default Main;
