import { UserProps } from "../../domain/entities/User.entity";

export type UserDTO = {
    id?: number;
    name: string;
    email: string;
    password: string;
}