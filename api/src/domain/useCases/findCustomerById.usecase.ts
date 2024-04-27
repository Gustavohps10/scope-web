import { CustomerDTO } from "../../data/dto/CustomerDTO";

export interface FindCustomerByIdUseCase {
    execute: (id: number) => Promise<CustomerDTO>
}