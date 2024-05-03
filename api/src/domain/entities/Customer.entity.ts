import { z } from "zod";

const CustomerSchema = z.object({
    id: z.number().int().optional(),
    name: z.string(),
    cpfcnpj: z.string().min(11).max(18).regex(new RegExp(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)),
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