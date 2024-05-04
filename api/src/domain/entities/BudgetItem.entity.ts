import { z } from "zod";
const BudgetItemSchema = z.object({
    id: z.number().int().optional(),
    budgetId: z.number().int(),
    productId: z.number().int(),
    productDescription: z.string().min(1).max(50),
    productAmount: z.number().min(1),
    unitPrice: z.number().positive(),
    totalPrice: z.number().optional()
})
export type BudgetItemProps = z.infer<typeof BudgetItemSchema>

export class BudgetItem {

    constructor(public props: BudgetItemProps){
        BudgetItemSchema.parse(props)
    };

    get id(){
        return this.props.id;
    }

    private set id(value: number | undefined) {
        this.props.id = value;
    }

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