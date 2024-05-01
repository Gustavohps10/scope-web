import { z } from "zod";

export type HttpResponse<T = any>  = {
    statusCode: number;
    data: T;
}

export type HttpRequest = any

export const ok = (data: any = {}): HttpResponse =>({
    statusCode: 200,
    data: data
})

export const serverError = (error: unknown, statusCode: number = 500): HttpResponse => {
    let data;
    if (error instanceof z.ZodError) {
        data = {
            errors: error.issues
        }
    }
    return {
        statusCode: statusCode,
        data: data
    }
}