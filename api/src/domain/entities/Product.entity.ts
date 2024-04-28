export type ProductProps = {
    categoryId: number;
    description: string;
    observation: string;
    saleValue: number;
    status: "ACTIVE" | "INACTIVE";
    createdAt: Date;
}

export class Product {
    public readonly id?: number;
    constructor(public props: ProductProps, id?: number){
        this.id = id || undefined
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