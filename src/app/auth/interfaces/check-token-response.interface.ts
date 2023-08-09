import { User } from "./user.interface";

export interface ICheckTokenResponse {
    user:  User;
    token: string;
}