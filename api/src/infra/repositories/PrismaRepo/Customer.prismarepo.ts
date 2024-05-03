import { CustomerRepository } from "../../../data/contracts/customerRepository";
import { PrismaClient } from "@prisma/client";
import { CustomerDTO } from "../../../data/dto/CustomerDTO";
import { PrismaError } from "../../../main/helpers/PrismaError";
const prisma = new PrismaClient()

export class CustomerPrismaRepo implements CustomerRepository{
    private readonly entityName = "Customer";

    async insert(customerProps: CustomerDTO): Promise<void> {
        try {
            await prisma.cliente.create({
                data: {
                  NOME_CLIENTE: customerProps.name,
                  CPF_CNPJ_CLIENTE: customerProps.cpfcnpj,
                  TIPO_CLIENTE: customerProps.customerType
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to create Customer", this.entityName);
        }
    }

    async findById(id: number): Promise<Required<CustomerDTO>> {
        try {
            const customer = await prisma.cliente.findUniqueOrThrow({
                where: {
                CLIENTEID: id
                },
            })
            return {
                id: customer.CLIENTEID,
                cpfcnpj: customer.CPF_CNPJ_CLIENTE,
                customerType: customer.TIPO_CLIENTE,
                name: customer.NOME_CLIENTE
            }
        } catch (error) {
            throw new PrismaError(error, "Failed to find Customer by Id", this.entityName);
        }
    }

    async findAll(): Promise<Required<CustomerDTO[]>> {
        try {
            const customers = await prisma.cliente.findMany();
            return customers.map(customer =>({
                id: customer.CLIENTEID,
                cpfcnpj: customer.CPF_CNPJ_CLIENTE,
                customerType: customer.TIPO_CLIENTE,
                name: customer.NOME_CLIENTE
            }))
        } catch (error) {
            throw new PrismaError(error, "Failed to find all Customers", this.entityName);
        }
    }

    async edit(customerProps: CustomerDTO): Promise<void> {
        try {
            await prisma.cliente.update({
                data: {
                    NOME_CLIENTE: customerProps.name,
                    CPF_CNPJ_CLIENTE: customerProps.cpfcnpj,
                    TIPO_CLIENTE: customerProps.customerType
                },
                where: {
                    CLIENTEID: customerProps.id
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to update Customer", this.entityName);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await prisma.cliente.delete({
                where: {
                    CLIENTEID: id
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to delete Customer", this.entityName)
        }
    }
}