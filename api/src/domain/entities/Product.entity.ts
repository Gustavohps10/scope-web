import { z } from "zod";

const ProductSchema = z.object({
    id: z.number().int().optional(),
    categoryId: z.number().int(),
    description: z.string().min(5),
    observation: z.string().min(5),
    saleValue: z.number(),
    status: z.union([z.literal('ACTIVE'),z.literal('INACTIVE')]),
    createdAt: z.date()
})

export type ProductProps = z.infer<typeof ProductSchema>

export class Product {
    constructor(public props: ProductProps){
        ProductSchema.parse(props)
    };

    updateCategory(categoryId: number){
        this.categoryId = categoryId
    }

    updateDescription(description: string){
        this.description = description
    }

    updateObservation(observation: string){
        this.observation = observation
    }

    updateSaleValue(saleValue: number){
        this.saleValue = saleValue
    }

    updateStatus(status: "ACTIVE" | "INACTIVE"){
        this.status = status
    }

    get id(){
        return this.props.id;
    }

    private set id(value: number | undefined) {
        this.props.id = value;
    }

    get categoryId(){
        return this.props.categoryId
    }

    private set categoryId(categoryId: number){
        this.props.categoryId = categoryId
    }

    get description(){
        return this.props.description
    }

    private set description(description: string){
        this.props.description = description
    }

    get observation(){
        return this.props.observation
    }

    private set observation(observation: string){
        this.props.observation = observation
    }

    get saleValue(){
        return this.props.saleValue
    }

    private set saleValue(saleValue: number){
        this.props.saleValue = saleValue
    }

    get status(){
        return this.props.status
    }

    private set status(status: "ACTIVE" | "INACTIVE"){
        this.props.status = status
    }

    get createdAt(){
        return this.props.createdAt
    }

    private set createdAt(createdAt: Date){
        this.props.createdAt = createdAt
    }
}