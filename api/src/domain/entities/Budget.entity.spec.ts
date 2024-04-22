import { Budget, BudgetProps } from "./Budget.entity";

test('updateCustomer method', ()=>{
    const budgetProps: BudgetProps = {
        customerId: 1,
        totalValue: 1000.50,
        createdAt: new Date,
        expiresAt: new Date
    }

    const budget = new Budget(budgetProps);
    budget.updateCustomer(2);
    expect(budget.customerId).toBe(2);
});

test('updateTotalValue method', ()=>{
    const budgetProps: BudgetProps = {
        customerId: 1,
        totalValue: 1000.50,
        createdAt: new Date,
        expiresAt: new Date
    }

    const budget = new Budget(budgetProps);
    budget.updateTotalValue(500.99)
    expect(budget.totalValue).toBe(500.99);
});

test('updateExpiresAt method', ()=>{
    const budgetProps: BudgetProps = {
        customerId: 1,
        totalValue: 1000.50,
        createdAt: new Date,
        expiresAt: new Date
    }

    const budget = new Budget(budgetProps);
    budget.updateExpiresAt(new Date('04-24-2024'))
    expect(budget.expiresAt).toEqual(new Date('04-24-2024'));
});