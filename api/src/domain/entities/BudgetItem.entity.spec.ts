import { BudgetItem, BudgetItemProps } from "./BudgetItem.entity";

test('calcTotalPrice method', ()=>{
    const budgetItemProps: BudgetItemProps = {
        budgetId: 1190,
        productId: 1,
        productDescription: "Chapa Metalica",
        productAmount: 10,
        unitPrice: 10.99
    }

    const budgetItem = new BudgetItem(budgetItemProps);
    budgetItem.calcTotalPrice();
    expect(budgetItem.totalPrice).toBe(109.9) //budgetItem.productAmount * budgetItem.unitPrice
});