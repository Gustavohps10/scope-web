export interface CreateCustomerUseCase {
    execute: (input: CreateCustomerInput) => Promise<void>
}

export type CreateCustomerInput = {
    name: string
    cpfcnpj: string
    customerType: "F" | "J"
}