export type BudgetProps = {
    customerId: number;
    totalValue: number;
    expiresIn: Date;
    createdAt: Date;
}

export class Budget {
    public readonly id?: number;
    constructor(public props: BudgetProps, id?: number){
        this.id = id || undefined
    };

    updateCustomer(customerId: number){
        this.customerId = customerId;
    }

    updateTotalValue(totalValue: number){
        this.totalValue =  totalValue;
    };

    updateexpiresIn(expiresIn: Date){
        this.expiresIn = expiresIn;
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

    get expiresIn(){
        return this.props.expiresIn;
    }

    private set expiresIn(expiresIn: Date){
        this.props.expiresIn = expiresIn
    }

    get createdAt(){
        return this.props.createdAt;
    }

    private set createdAt(createdAt: Date){
        this.props.createdAt = createdAt
    }
}