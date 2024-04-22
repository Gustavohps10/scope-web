export type UserProps = {
    name: string;
    email: string;
    password: string;
}

export class User {
    constructor(public props: UserProps){};

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