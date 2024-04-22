export type ProductCategoryProps = {
    description: string
}

export class ProductCategory {
    constructor(public props: ProductCategoryProps){}

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