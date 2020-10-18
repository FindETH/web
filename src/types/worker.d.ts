declare module '*.worker.ts' {
  class CustomWorker extends Worker {
    [key: string]: any;
  }

  interface WorkerConstructor {
    new (): CustomWorker;
  }

  const constructor: WorkerConstructor;
  export default constructor;
}
