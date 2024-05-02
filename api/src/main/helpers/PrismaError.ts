import { Prisma } from "@prisma/client";

export class PrismaError extends Error {
    public message: string;
    public readonly entity?: string
    public readonly errorMessage: string
    public readonly statusCode: number

    constructor(error: unknown, message: string, entity?: string){
        super(message);
        this.entity = entity;
        this.message = message

        const codeMap = this.handleMapper(error)
        this.errorMessage = codeMap.message
        this.statusCode = codeMap.statusCode
    }

    private handleMapper(error: unknown): CodeMap{
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return CodeMapper.find(prismaCode => error.code == prismaCode.prismaCode) || CodeMapper[0] // Defalut  
        }
        return {
            statusCode: 500,
            message: "Unknown error"
        }
    }
}

type CodeMap = {
    statusCode: number,
    prismaCode?: string,
    message: string
}

const CodeMapper: CodeMap[] = [
    {
        statusCode: 500,
        message: "Unknown Prisma error"
    },
    {
        statusCode: 404,
        prismaCode: "P2025",
        message: "Record not found"
    },
    {
        statusCode: 409,
        prismaCode: "P2002",
        message: "Record already exists"
    }
]