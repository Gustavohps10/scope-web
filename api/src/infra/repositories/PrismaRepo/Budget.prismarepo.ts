import { BudgetRepository } from "../../../data/contracts/budgetRepository";
import { PrismaClient } from "@prisma/client";
import { BudgetDTO } from "../../../data/dto/BudgetDTO";
const prisma = new PrismaClient();

export class BudgetPrismaRepo implements BudgetRepository {
    async insert(budgetProps: BudgetDTO): Promise<void> {
        await prisma.orcamento.create({
            data: {
                DT_ORCAMENTO: budgetProps.createdAt,
                DT_VALIDADE_ORCAMENTO: budgetProps.expiresIn,
                VL_TOTAL_ORCAMENTO: budgetProps.totalValue,
                CLIENTE:{
                    connect: {
                        CLIENTEID: budgetProps.customerId
                    }
                }
            }
        });
    }

    async findById(id: number): Promise<Required<BudgetDTO>> {
        const budget = await prisma.orcamento.findUniqueOrThrow({
            where: {
              ORCAMENTOID: id
            },
        });
        return {
            id: budget.ORCAMENTOID,
            createdAt: budget.DT_ORCAMENTO,
            expiresIn: budget.DT_VALIDADE_ORCAMENTO,
            totalValue: budget.VL_TOTAL_ORCAMENTO,
            customerId: budget.CLIENTEID
        }
        //await prisma.$disconnect()
    }

    async findAll(): Promise<Required<BudgetDTO[]>> {
        const budgets = await prisma.orcamento.findMany();
        return budgets.map(budget =>({
            id: budget.ORCAMENTOID,
            createdAt: budget.DT_ORCAMENTO,
            expiresIn: budget.DT_VALIDADE_ORCAMENTO,
            totalValue: budget.VL_TOTAL_ORCAMENTO,
            customerId: budget.CLIENTEID
        }));
    }

    async edit(budgetProps: BudgetDTO): Promise<void> {
        await prisma.orcamento.update({
            data: {
                DT_ORCAMENTO: budgetProps.createdAt,
                DT_VALIDADE_ORCAMENTO: budgetProps.expiresIn,
                VL_TOTAL_ORCAMENTO: budgetProps.totalValue,
                CLIENTE:{
                    connect: {
                        CLIENTEID: budgetProps.customerId
                    }
                }
            },
            where: {
                ORCAMENTOID: budgetProps.id
            }
        })
    }

    async delete(id: number): Promise<void> {
        await prisma.orcamento.delete({
            where: {
                ORCAMENTOID: id
            }
        })
    }
}