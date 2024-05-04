import { BudgetItem } from "../../domain/entities/BudgetItem.entity";
import { AddBudgetItemsInput, AddBudgetItemsUseCase } from "../../domain/useCases/addBudgetItems.usecase";
import { BudgetItemRepository } from "../contracts/budgetItemRepository";

export class AddBudgetItemsService implements AddBudgetItemsUseCase{
    constructor(private readonly budgetItemRepo: BudgetItemRepository){}

    async execute(inputs: AddBudgetItemsInput[], budgetId: number): Promise<void>{
        budgetId = Number(budgetId);
        const products = await this.budgetItemRepo.findProductList(inputs.map(input=>input.productId));
        const items = inputs.map((input)=>{
            let product = products.find(product => product.id == input.productId);
            if (product === undefined) {
                throw new Error(`Product ${input.productId} not found`);
            }

            let item = new BudgetItem({
                budgetId: budgetId,
                productId: input.productId,
                productDescription: product.description,
                productAmount: input.productAmount,
                unitPrice: product.saleValue
            });
            item.calcTotalPrice();            
            return item;
        });

        await this.budgetItemRepo.addItems(items, budgetId);
    }
}