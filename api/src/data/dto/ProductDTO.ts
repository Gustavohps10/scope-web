export type ProductDTO = {
    id?: number
    description: string
    observation: string
    price: number
    status: "ACTIVE" | "INACTIVE"
    createAt: Date
    categoryId: number
}