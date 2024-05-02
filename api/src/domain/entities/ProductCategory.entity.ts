import { z } from "zod";

const ProductCategoryShema = z.object({
    id: z.number().int().optional(),
    description: z.string().min(2)
})

export type ProductCategoryProps = z.infer<typeof ProductCategoryShema>

export class ProductCategory {
    constructor(public props: ProductCategoryProps){
        ProductCategoryShema.parse(props)
    };

    updateDescription(description: string){
        this.description = description
    }

    get id(){
        return this.props.id;
    }

    private set id(value: number | undefined) {
        this.props.id = value;
    }

    get description(){
        return this.props.description
    }

    private set description(description: string){
        this.props.description = description
    }
}