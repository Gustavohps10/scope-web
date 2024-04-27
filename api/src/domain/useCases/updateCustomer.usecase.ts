export interface UpdateCustomerUseCase {
    execute: (input: UpdateCustomerInput, id: number) => Promise<void>
}

export type UpdateCustomerInput = {
    name: string
    cpfcnpj: string
    customerType: string
}