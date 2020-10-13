type ObjectKeys<T> =
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends object ? Array<keyof T> : T extends number ? [] : T extends unknown[] | string ? string[] : never;

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>;
}
