export type ProductDTO = {
    id?: number
    description: string
    observation: string
    saleValue: number
    status: "ACTIVE" | "INACTIVE"
    createdAt: Date
    categoryId: number
}