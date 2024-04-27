import { CustomerDTO } from "../../data/dto/CustomerDTO";

export interface FindAllCustomersUseCase {
    execute: ()=> Promise<Required<CustomerDTO[]>>
}