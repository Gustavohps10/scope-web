export type CustomerProps = {
    name: string;
    cpfcnpj: string;
    customerType: string;
}

export class Customer {
    public readonly id?: number;
    constructor(public props: CustomerProps, id?: number){
        this.id = id || undefined
    };

    updateName(name: string){
        this.name = name
    }

    updateCpfcnpj(cpfcnpj: string){
        this.cpfcnpj = cpfcnpj;
    }
    
    updateCustomerType(customerType: string){
        this.customerType = customerType
    }

    get name(){
        return this.props.name
    }

    private set name(name: string){
        this.props.name = name
    }

    get cpfcnpj(){
        return this.props.cpfcnpj
    }

    private set cpfcnpj(cpfcnpj: string){
        this.props.cpfcnpj = cpfcnpj
    }

    get customerType(){
        return this.props.customerType
    }

    private set customerType(customerType: string){
        this.props.customerType = customerType
    }
}