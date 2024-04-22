export type ProductCategoryProps = {
    description: string
}

export class ProductCategory {
    public readonly id?: number;
    constructor(public props: ProductCategoryProps, id?: number){
        this.id = id || undefined
    };

    updateDescription(description: string){
        this.description = description
    }

    get description(){
        return this.props.description
    }

    private set description(description: string){
        this.props.description = description
    }
}