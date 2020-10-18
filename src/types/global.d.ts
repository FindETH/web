declare namespace NodeJS {
  interface Global {
    ___loader: {
      enqueue(): void;
    };
  }
}
