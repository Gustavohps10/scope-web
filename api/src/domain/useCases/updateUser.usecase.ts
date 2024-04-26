export interface UpdateUserUseCase {
    execute: (input: UpdateUserInput, id: number)=> Promise<void>
}

export type UpdateUserInput = {
    name: string,
    email: string,
    password: string
}