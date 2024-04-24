export interface FindUserByIdUseCase {
    execute: (id: number) => Promise<FindUserOutput>
}

export type FindUserOutput = {
    id: number
    name: string,
    email: string,
    password: string
}