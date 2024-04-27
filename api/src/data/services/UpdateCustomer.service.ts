import { UpdateCustomerInput, UpdateCustomerUseCase } from "../../domain/useCases/updateCustomer.usecase";
import { CustomerRepository } from "../contracts/customerRepository";

export class UpdateCustomerService implements UpdateCustomerUseCase{
    constructor(private readonly customerRepo: CustomerRepository){}

    async execute(input: UpdateCustomerInput, id: number): Promise<void>{
        return this.customerRepo.edit({...input, id});
    }

}