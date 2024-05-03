import { z } from "zod";

const CustomerSchema = z.object({
    id: z.number().int().optional(),
    name: z.string(),
    cpfcnpj: z.string()
    .regex(new RegExp(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/), "value must be in CPF format: 000.000.000-00 or CNPJ format: 00.000.000/0000-00"),
    customerType: z.enum(["F", "J"])
})

export type CustomerProps = z.infer<typeof CustomerSchema>

export class Customer {

    constructor(public props: CustomerProps){
        CustomerSchema.parse(props)
    };

    updateName(name: string){
        this.name = name
    }

    updateCpfcnpj(cpfcnpj: string){
        this.cpfcnpj = cpfcnpj;
    }
    
    updateCustomerType(customerType: "F" | "J"){
        this.customerType = customerType
    }

    get id(){
        return this.props.id;
    }

    private set id(value: number | undefined) {
        this.props.id = value;
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

    private set customerType(customerType: "F" | "J"){
        this.props.customerType = customerType
    }
}