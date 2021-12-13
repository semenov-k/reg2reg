import { Org } from "../orgs/orgs.interfaces";
import * as TransformWorkerLocal from './transform.worker';
// eslint-disable-next-line import/no-webpack-loader-syntax
import createTransformWorker from 'workerize-loader!./transform.worker';


export class TransformService {
  private _tasks: { [k: string]: ReturnType<typeof createTransformWorker> } = {};

  async startTransformationTask(taskId: string, sourceFile: File, org: Org): Promise<File> {
    const taskWorker = createTransformWorker<typeof TransformWorkerLocal>();
    this._tasks[taskId] = taskWorker;

    const resultFile = await taskWorker.transformRegister(sourceFile, org);

    this.stopTransformationTask(taskId);

    return resultFile;
  }

  stopTransformationTask(taskId: string) {
    if (this._tasks[taskId] !== undefined) {
      const taskWorker = this._tasks[taskId];
      taskWorker.terminate();

      delete this._tasks[taskId];
    }
  }
}
