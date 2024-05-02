import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { HttpError, serverError } from "../../presentation/contracts/http";

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const httpResponse = handleError(error);
    return res.status(httpResponse.httpCode).json(httpResponse);
}

const handleError = (error: Error): HttpError => {
    if (error instanceof z.ZodError) {
        return {
            httpCode: 422,
            errorMessage: "Validation error",
            errors: error.issues.map(issue => ({
                message: issue.message,
                path: issue.path,
                code: z.ZodIssueCode.invalid_arguments
            }))
        }
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2025"){
            return {
                httpCode: 500,
                errorMessage: "Record not found",
                errors: [
                    {
                        message: error.message,
                    }
                ]
            }
        }
        
    }

    return {
        httpCode: 500,
        errorMessage: "Server error",
        errors: [{message: error instanceof Error ? error.message : "Unknown error"}]
    }
}