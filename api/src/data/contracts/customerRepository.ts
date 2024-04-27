import { CustomerDTO } from "../dto/CustomerDTO"

export interface CustomerRepository{
    insert: (customerProps: CustomerDTO) => Promise<void>
    findById: (id: number) => Promise<Required<CustomerDTO>>
    findAll: () => Promise<Required<CustomerDTO[]>>
    edit: (customerProps: CustomerDTO) => Promise<void>
    delete: (id: number) => Promise<void>
}