import type { AxiosError } from 'axios';
import type { HandleReturn, HandleAxiosReturn } from '@@types/promises';

export async function handle<T>(promise: Promise<T>): HandleReturn<T> {
    return promise
    .then((results: T) => {
        return [results, undefined] as [T, undefined];
    })
    .catch((err: Error) => {
        return [undefined, err]
    });
};

// eslint-disable-next-line
export async function handleAxios<T, D = any>(promise: Promise<T>): HandleAxiosReturn<T, D> {
    try {
        const results = await promise;
        return [results, undefined];
    }
    catch(err) {
        const error = err as AxiosError<D>;
        return [undefined, error];
    }
};