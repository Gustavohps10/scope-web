import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { PrismaError } from "../helpers/PrismaError";
import { HttpError } from "../../presentation/contracts/http";

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const httpResponse = handleError(error);
    return res.status(500).json(httpResponse);
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
    
    if (error instanceof PrismaError){
        return {
            httpCode: 400,
            errorMessage: error.message,
            errors: [{message: error.errorMessage}]
            
        }
    }

    return {
        httpCode: 500,
        errorMessage: "Server error",
        errors: [{message: error instanceof Error ? error.message : "Unknown error"}]
    }
}