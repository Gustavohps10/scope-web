import { Customer } from "../../domain/entities/Customer.entity";
import { CreateCustomerInput, CreateCustomerUseCase } from "../../domain/useCases/CreateCustomer.usecase";
import { CustomerRepository } from "../contracts/customerRepository";

export class CreateCustomerService implements CreateCustomerUseCase {
    constructor(private readonly customerRepo: CustomerRepository){}

    async execute(input: CreateCustomerInput){
        const customer = new Customer(input);
        return this.customerRepo.insert(customer);
    }
}