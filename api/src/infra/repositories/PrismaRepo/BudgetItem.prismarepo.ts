import { PrismaClient } from "@prisma/client";
import { BudgetItemRepository } from "../../../data/contracts/budgetItemRepository";
import { BudgetItemDTO } from "../../../data/dto/BudgetItemDTO";
const prisma = new PrismaClient();

export class BudgetItemPrismaRepo implements BudgetItemRepository{
    async addItems(items: BudgetItemDTO[]): Promise<void>{
        await prisma.orcamento_item.createMany({
            data: items.map(item => ({
                ORCAMENTOID: item.budgetId,
                PRODUTOID: item.productId,
                PRODUTODESC: item.productDescription,
                QT_PRODUTO: item.productAmount,
                VL_UNITARIO: item.unitPrice,
                VL_TOTAL: item.totalPrice
            }))
        });
    }

    async removeItems(productIdsToDelete: number[]): Promise<void>{
        await prisma.orcamento_item.deleteMany({
            where: {
                PRODUTOID: {
                    in: productIdsToDelete
                }
            }
        });
    }
}