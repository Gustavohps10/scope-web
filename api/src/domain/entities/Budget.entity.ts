import { z } from "zod";

const BudgetSchema = z.object({
    id: z.number().int().optional(),
    customerId: z.number().int(),
    totalValue: z.number(),
    expiresIn: z.date().refine((val => val > new Date()), "expiresIn must be greater than the current date"),
    createdAt: z.date()
});
export type BudgetProps = z.infer<typeof BudgetSchema>

export class Budget {
    constructor(public props: BudgetProps){
        BudgetSchema.parse(props);
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

    get id(){
        return this.props.id;
    }

    private set id(value: number | undefined) {
        this.props.id = value;
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