export type BudgetItem = {
    id: number
    budgetId: number
    productId: number
    productDescription: string
    productAmount: number
    unitPrice: number
    totalPrice?: number
}