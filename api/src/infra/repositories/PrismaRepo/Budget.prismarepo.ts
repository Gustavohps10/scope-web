import { BudgetRepository } from "../../../data/contracts/budgetRepository";
import { PrismaClient } from "@prisma/client";
import { BudgetDTO } from "../../../data/dto/BudgetDTO";
import { PrismaError } from "../../../main/helpers/PrismaError";
const prisma = new PrismaClient();

export class BudgetPrismaRepo implements BudgetRepository {
    private readonly entityName = "Budget";

    async insert(budgetProps: BudgetDTO): Promise<void> {
        try {
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
        } catch (error) {
            throw new PrismaError(error, "Failed to create Budget", this.entityName);
        }
    }

    async findById(id: number): Promise<Required<BudgetDTO>> {
        try {
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
        } catch (error) {
            throw new PrismaError(error, "Failed to find Budget by id", this.entityName);
        }
    }

    async findAll(): Promise<Required<BudgetDTO[]>> {
        try {
            const budgets = await prisma.orcamento.findMany();
            return budgets.map(budget =>({
                id: budget.ORCAMENTOID,
                createdAt: budget.DT_ORCAMENTO,
                expiresIn: budget.DT_VALIDADE_ORCAMENTO,
                totalValue: budget.VL_TOTAL_ORCAMENTO,
                customerId: budget.CLIENTEID
            }));
        } catch (error) {
            throw new PrismaError(error, "Failed to find all Budgets", this.entityName);
        }
    }

    async edit(budgetProps: BudgetDTO): Promise<void> {
        try {
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
        } catch (error) {
            throw new PrismaError(error, "Failed to update Budget", this.entityName);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await prisma.orcamento.delete({
                where: {
                    ORCAMENTOID: id
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to delete Budget", this.entityName);
        }
    }
}