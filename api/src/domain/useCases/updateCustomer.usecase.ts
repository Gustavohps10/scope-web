export interface UpdateCustomerUseCase {
    execute: (input: UpdateCustomerInput) => Promise<void>
}

export type UpdateCustomerInput = {
    id: number
    name: string
    cpfcnpj: string
    customerType: "F" | "J"
}