import { FindAllCustomersUseCase } from "../../domain/useCases/findAllCustomers.usecase";
import { CustomerRepository } from "../contracts/customerRepository";
import { CustomerDTO } from "../dto/CustomerDTO";

export class FindAllCustomersService implements FindAllCustomersUseCase{
    constructor(private readonly customerRepo: CustomerRepository){}

    async execute(): Promise<Required<CustomerDTO[]>> {
        return this.customerRepo.findAll();
    }
}