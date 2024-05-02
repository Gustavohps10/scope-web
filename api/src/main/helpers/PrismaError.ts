import { Prisma } from "@prisma/client";

type ErrorMap = {
    statusCode: number,
    prismaCode?: string,
    message: string
}

export class PrismaError extends Error {
    public message: string;
    public readonly entity?: string
    public readonly errorMessage: string
    public readonly statusCode: number

    constructor(error: unknown, message: string, entity?: string){
        super(message);
        this.entity = entity;
        this.message = message

        const errorMap = this.handleError(error)
        this.errorMessage = errorMap.message
        this.statusCode = errorMap.statusCode
    }

    private handleError(error: unknown): ErrorMap{
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return this.prismaErrorMapper(this.entity).find(prismaCode => error.code == prismaCode.prismaCode) || this.prismaErrorMapper()[0] // Defalut  
        }

        if(error instanceof Prisma.PrismaClientUnknownRequestError){
            return {
                statusCode: 500,
                message: "Unknown request error" 
            }
        }

        if(error instanceof Prisma.PrismaClientValidationError){
            return {
                statusCode: 422,
                message: "Validation error"
            }
        }

        return {
            statusCode: 500,
            message: error instanceof Error ? error.name : "fasd"
        }
    }

    private prismaErrorMapper(entity?: string): ErrorMap[]{
        return [
            {
                statusCode: 500,
                message: "Unknown Prisma error"
            },
            {
                statusCode: 404,
                prismaCode: "P2025",
                message: `${entity} not found`
            },
            {
                statusCode: 409,
                prismaCode: "P2002",
                message: `${entity} already exists`
            }
        ]
    }
}