import { PrismaClient } from "@prisma/client";
import { BudgetItemRepository } from "../../../data/contracts/budgetItemRepository";
import { BudgetItemDTO } from "../../../data/dto/BudgetItemDTO";
import { ProductDTO } from "../../../data/dto/ProductDTO";
import { PrismaError } from "../../../main/helpers/PrismaError";
const prisma = new PrismaClient();

export class BudgetItemPrismaRepo implements BudgetItemRepository{
    async addItems(items: BudgetItemDTO[], budgetId: number): Promise<void> {
        try {
            await prisma.$transaction(async (prisma)=> {
                await prisma.orcamento_item.createMany({
                    data: items.map((item) => {
                        if (item.totalPrice === undefined){
                            throw new Error('Budget Total value is empty');
                        }
        
                        return {
                            ORCAMENTOID: budgetId,
                            PRODUTOID: item.productId,
                            PRODUTODESC: item.productDescription,
                            QT_PRODUTO: item.productAmount,
                            VL_UNITARIO: item.unitPrice,
                            VL_TOTAL: item.totalPrice
                        }
                    })
                });
                await this.updateBudgetTotalValue(budgetId);
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to add items");
        }
    }

    async removeItems(productIdsToDelete: number[], budgetId: number): Promise<void>{
        try {
            await prisma.orcamento_item.deleteMany({
                where: {
                    ORCAMENTOID: budgetId,
                    PRODUTOID: {
                        in: productIdsToDelete
                    }
                }
            });
        } catch (error) {
            throw new PrismaError(error, "Failed to remove items")
        }
    }

    async findProductList(productsIds: number[]): Promise<Required<ProductDTO[]>>{
        try {
            const products = await prisma.produto.findMany({
                where:{
                    PRODUTOID: {
                        in: productsIds
                    }
                }
            });
    
            return products.map(product => ({
                id: product.PRODUTOID,
                description: product.DS_PRODUTO,
                observation: product.OBS_PRODUTO,
                saleValue: product.VL_VENDA_PRODUTO,
                status: product.STATUS_PRODUTO as "ACTIVE" | "INACTIVE",
                createdAt: product.DT_CADASTRO_PRODUTO,
                categoryId: product.CATEGORIAPRODUTOID
            }));
        } catch (error) {
            throw new PrismaError(error, "Failed to find product list");
        }
    }

    async updateBudgetTotalValue(budgetId: number): Promise<void>{
        const budgetItems = await prisma.orcamento_item.findMany({
            where: {
                ORCAMENTOID: budgetId
            }
        });

        let budgetTotalValue = 0;
        budgetItems.forEach(item => budgetTotalValue += item.VL_TOTAL)
        
        await prisma.orcamento.update({
            data:{
                VL_TOTAL_ORCAMENTO: budgetTotalValue
            },
            where: {
                ORCAMENTOID: budgetId
            }
        })  
    }
}