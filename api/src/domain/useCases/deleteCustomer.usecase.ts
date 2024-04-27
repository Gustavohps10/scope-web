export interface DeleteCustomerUseCase {
    execute: (id: number) => Promise<void>
}