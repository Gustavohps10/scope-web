export type CustomerProps = {
    name: string;
    cpfcnpj: string;
    customerType: string;
}

export class Customer {
    constructor(public props: CustomerProps){}

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