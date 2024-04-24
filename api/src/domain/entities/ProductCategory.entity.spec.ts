import { ProductCategory, ProductCategoryProps } from "./ProductCategory.entity";

test('updateDescription method', () => {
    const productCategory: ProductCategoryProps = {
        description: "test category"
    };

    const category = new ProductCategory(productCategory)
    category.updateDescription("category updated")

    expect(category.description).toBe("category updated");
});
