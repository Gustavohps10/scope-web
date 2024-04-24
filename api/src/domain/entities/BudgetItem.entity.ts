export type BudgetItemProps = {
    budgetId: number;
    productId: number;
    productDescription: string;
    productAmount: number;
    unitPrice: number;
    totalPrice?: number;
}

export class BudgetItem {
    public readonly id?: number;
    constructor(public props: BudgetItemProps, id?: number){
        this.id = id || undefined
    };

    get budgetId(){
        return this.props.budgetId;
    }

    private set budgetId(budgetId: number){
        this.props.budgetId = budgetId;
    }

    get productId(){
        return this.props.productId;
    }

    private set productId(productId: number){
        this.props.productId = productId;
    }

    get productDescription(){
        return this.props.productDescription;
    }

    private set productDescription(productDescription: string){
        this.props.productDescription = productDescription;
    }

    get productAmount(){
        return this.props.productAmount;
    }

    private set productAmount(productAmount: number){
        this.props.productAmount = productAmount;
    }

    get unitPrice(){
        return this.props.unitPrice;
    }

    private set unitPrice(unitPrice: number){
        this.props.unitPrice = unitPrice;
    }

    get totalPrice(){
        return this.props.totalPrice;
    }

    calcTotalPrice(){
        this.props.totalPrice = this.props.unitPrice * this.props.productAmount
    }
}