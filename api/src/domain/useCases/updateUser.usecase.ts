export interface UpdateUserUseCase {
    execute: (input: UpdateUserInput)=> Promise<void>
}

export type UpdateUserInput = {
    id: number,
    name: string,
    email: string,
    password: string
}