import type { HandleAxiosReturn } from '@@types/promises';

import { axiosRequests } from '@@utils';

interface FormCarrySubmission {
    name: string,
    email: string,
    phoneNumber: string,
    message: string
};

interface FormCarryErrorResponse {
    code: number,
    message: string,
    status: string,
    title: string
};

export function send(submission: FormCarrySubmission): HandleAxiosReturn<null, FormCarryErrorResponse> {
    const endpoint = "https://formcarry.com/s/jmwJqRG3jGF";
    return axiosRequests.request<null, FormCarrySubmission, FormCarryErrorResponse>({
        endpoint,
        method: "post",
        data: submission,
        headers: {
            Accept: "application/json"
        }
    });
};