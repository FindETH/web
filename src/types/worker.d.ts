declare module '*.worker.ts' {
  class CustomWorker extends Worker {
    // TODO: Figure out if there's a better way to type this
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  interface WorkerConstructor {
    new (): CustomWorker;
  }

  const constructor: WorkerConstructor;
  export default constructor;
}
