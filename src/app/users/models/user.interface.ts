import { UserProfile } from "./userProfile.interface";

export interface User {
    id ?: string | number;
    userName : string;
    email : string;
    password : string;
    user_profile ?: UserProfile; 
}
