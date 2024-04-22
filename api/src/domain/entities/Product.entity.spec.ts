import { Product, ProductProps } from "./Product.entity"

test('updateCategory method', ()=>{
    const productProps: ProductProps = {
        categoryId: 1,
        description: "Chapa Metalica",
        observation: "Lorem ipsum",
        saleValue: 122.50,
        status: "active",
        createdAt: new Date
    }

    const product = new Product(productProps);
    product.updateCategory(3);

    expect(product.categoryId).toBe(3)
});

test('updateDescription method', ()=>{
    const productProps: ProductProps = {
        categoryId: 1,
        description: "Chapa Metalica",
        observation: "Lorem ipsum",
        saleValue: 122.50,
        status: "active",
        createdAt: new Date
    }

    const product = new Product(productProps);
    product.updateDescription("Desc updated")

    expect(product.description).toBe("Desc updated")
});

test('updateObservation method', ()=>{
    const productProps: ProductProps = {
        categoryId: 1,
        description: "Chapa Metalica",
        observation: "Lorem ipsum",
        saleValue: 122.50,
        status: "active",
        createdAt: new Date
    }

    const product = new Product(productProps);
    product.updateObservation("Obs updated")

    expect(product.observation).toBe("Obs updated");
});

test('updateSaleValue method', ()=>{
    const productProps: ProductProps = {
        categoryId: 1,
        description: "Chapa Metalica",
        observation: "Lorem ipsum",
        saleValue: 122.50,
        status: "active",
        createdAt: new Date
    }

    const product = new Product(productProps);
    product.updateSaleValue(100.20)

    expect(product.saleValue).toBe(100.20);
});

test('updateStatus method', ()=>{
    const productProps: ProductProps = {
        categoryId: 1,
        description: "Chapa Metalica",
        observation: "Lorem ipsum",
        saleValue: 122.50,
        status: "active",
        createdAt: new Date
    }

    const product = new Product(productProps);
    product.updateStatus("inactive")

    expect(product.status).toBe("inactive");
});


