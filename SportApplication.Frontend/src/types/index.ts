export type StringKey<T> = keyof T extends string ? keyof T : never;
export type Action<T> = (props: T) => void;

export type Guid = string;
export type DateOnly = string;
