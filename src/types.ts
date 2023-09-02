export type MakePropsOptional<T> = {
  [K in keyof T]?: T[K];
};
