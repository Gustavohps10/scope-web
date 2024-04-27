import { DeleteCustomerUseCase } from "../../domain/useCases/deleteCustomer.usecase";
import { CustomerRepository } from "../contracts/customerRepository";

export class DeleteCustomerService implements DeleteCustomerUseCase{
    constructor(private readonly customerRepo: CustomerRepository){}

    async execute(id: number): Promise<void>{
        return this.customerRepo.delete(Number(id));
    }
}