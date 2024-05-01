import { z } from "zod";

const UserSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(1),
});

export type UserProps = z.infer<typeof UserSchema>

export class User {
    constructor(public props: UserProps){
        UserSchema.parse(props)
    };

    updateName(name: string){
        this.name = name
    }

    updateEmail(email: string){
        this.email = email;
    }
    
    updatePassword(password: string){
        this.password = password
    }

    get name(){
        return this.props.name;
    }

    private set name(value : string) {
        this.props.name = value;
    }

    get email(){
        return this.props.email
    }

    private set email(email: string){
        this.props.email = email
    }

    get password(){
        return this.props.password
    }

    private set password(password: string){
        this.props.password = password
    }
    
}