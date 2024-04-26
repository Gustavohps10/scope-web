export interface DeleteUserUseCase {
    execute: (id: number)=> Promise<void>
}