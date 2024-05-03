import { Customer } from "../../domain/entities/Customer.entity";
import { UpdateCustomerInput, UpdateCustomerUseCase } from "../../domain/useCases/updateCustomer.usecase";
import { CustomerRepository } from "../contracts/customerRepository";

export class UpdateCustomerService implements UpdateCustomerUseCase{
    constructor(private readonly customerRepo: CustomerRepository){}

    async execute(input: UpdateCustomerInput): Promise<void>{
        const customer = new Customer(input);
        return this.customerRepo.edit(customer);
    }

}