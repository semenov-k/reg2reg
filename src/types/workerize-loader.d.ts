module 'workerize-loader!*' {
  type Workerized<T> = T & {
    terminate: () => void
  };

  function createWorker<T>(): Workerized<T>;

  export default createWorker;
}