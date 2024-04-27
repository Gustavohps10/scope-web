import { CustomerRepository } from "../../../data/contracts/customerRepository";
import { PrismaClient } from "@prisma/client";
import { CustomerDTO } from "../../../data/dto/CustomerDTO";
const prisma = new PrismaClient()

export class CustomerPrismaRepo implements CustomerRepository{
    async insert(customerProps: CustomerDTO): Promise<void> {
        await prisma.cliente.create({
            data: {
              NOME_CLIENTE: customerProps.name,
              CPF_CNPJ_CLIENTE: customerProps.cpfcnpj,
              TIPO_CLIENTE: customerProps.customerType
            }
        })
    }

    async findById(id: number): Promise<Required<CustomerDTO>> {
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
        //await prisma.$disconnect()
    }

    async findAll(): Promise<Required<CustomerDTO[]>> {
        const customers = await prisma.cliente.findMany();
        return customers.map(customer =>({
            id: customer.CLIENTEID,
            cpfcnpj: customer.CPF_CNPJ_CLIENTE,
            customerType: customer.TIPO_CLIENTE,
            name: customer.NOME_CLIENTE
        }))
    }

    async edit(customerProps: CustomerDTO): Promise<void> {
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
    }

    async delete(id: number): Promise<void> {
        await prisma.cliente.delete({
            where: {
                CLIENTEID: id
            }
        })
    }
}