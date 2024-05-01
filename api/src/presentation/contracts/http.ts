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
    if (error instanceof z.ZodError) {
        return {
            statusCode: statusCode,
            data: {
                errors: error.issues
            }
        }
    }
    return {
        statusCode: statusCode,
        data: error instanceof Error ? error.message : "Unknown error"
    }
    
}