import { Customer, CustomerProps } from "./Customer.entity";

test('updateName method', () => {
    const customerProps: CustomerProps = {
        name: "admin",
        cpfcnpj: "111.111.111-11",
        customerType: "F"
    };

    const customer = new Customer(customerProps);
    customer.updateName('Name updated');

    expect(customer.name).toBe('Name updated');
});

test('updateCpfcnpj method', () => {
    const customerProps: CustomerProps = {
        name: "admin",
        cpfcnpj: "111.111.111-11",
        customerType: "F"
    };

    const customer = new Customer(customerProps);
    customer.updateCpfcnpj("222.222.222-22");

    expect(customer.cpfcnpj).toBe("222.222.222-22");
});

test('updateCustomerType method', () => {
    const customerProps: CustomerProps = {
        name: "admin",
        cpfcnpj: "111.111.111-11",
        customerType: "F"
    };

    const customer = new Customer(customerProps);
    customer.updateCustomerType("J")

    expect(customer.customerType).toBe("J");
});