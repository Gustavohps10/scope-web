import { Customer } from "../../domain/entities/Customer.entity";
import { FindCustomerByIdUseCase } from "../../domain/useCases/findCustomerById.usecase";
import { CustomerRepository } from "../contracts/customerRepository";
import { CustomerDTO } from "../dto/CustomerDTO";

export class FindCustomerByIdService implements FindCustomerByIdUseCase{
    constructor(private readonly customerRepo: CustomerRepository){}

    async execute(id: number): Promise<CustomerDTO>{
        return this.customerRepo.findById(Number(id));
    }
}