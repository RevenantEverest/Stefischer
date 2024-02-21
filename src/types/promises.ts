import type { AxiosError } from 'axios';

export type HandleReturn<T> = Promise<[T | undefined, Error | undefined]>;

// eslint-disable-next-line
export type HandleAxiosReturn<T, D = any> = Promise<[T | undefined, AxiosError<D> | undefined]>;