export type BudgetProps = {
    customerId: number;
    totalValue: number;
    expiresAt: Date;
    createdAt: Date;
}

export class Budget {
    constructor(public props: BudgetProps){}

    updateCustomer(customerId: number){
        this.customerId = customerId;
    }

    updateTotalValue(totalValue: number){
        this.totalValue =  totalValue;
    };

    updateExpiresAt(expiresAt: Date){
        this.expiresAt = expiresAt;
    }

    get customerId(){
        return this.props.customerId;
    }

    private set customerId(customerId: number){
        this.props.customerId = customerId
    }

    get totalValue(){
        return this.props.totalValue;
    }

    private set totalValue(totalValue: number){
        this.props.totalValue = totalValue
    }

    get expiresAt(){
        return this.props.expiresAt;
    }

    private set expiresAt(expiresAt: Date){
        this.props.expiresAt = expiresAt
    }

    get createdAt(){
        return this.props.createdAt;
    }

    private set createdAt(createdAt: Date){
        this.props.createdAt = createdAt
    }
}