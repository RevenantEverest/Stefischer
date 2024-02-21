import type { AxiosResponse } from 'axios';
import type { HandleAxiosReturn } from '@@types/promises';

import axios from 'axios';

import * as promises from './promises';

type RequestMethods = "get" | "post" | "put" | "patch" | "delete";

interface CommonRequestParams {
    method: RequestMethods,
    endpoint: string,
};

interface RequestHeaders {
    [key: string]: string
};

interface RequestParams<T> extends CommonRequestParams {
    data?: T,
    headers?: RequestHeaders
};

export async function request<T, D = null, E = null>({ method, endpoint, data, headers }: RequestParams<D>): HandleAxiosReturn<T> {
    const request = generateRequest(method, endpoint, data, headers);

    const [res, err] = await promises.handleAxios<AxiosResponse<T>, E>(request);

    if(err) {
        return [undefined, err];
    }

    return [res?.data, undefined];
};

export async function generateRequest<T>(method: RequestMethods, endpoint: string, data?: T, headers?: RequestHeaders) {
    const request = axios({ url: endpoint, method, data, headers });

    return request;
};