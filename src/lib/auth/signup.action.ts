"use server"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../../db/firebase.config";

export async function register(prev: unknown, FormData:FormData){

try{
    const email= FormData.get('email')?.toString();
    const password= FormData.get('password')?.toString();
    const username= FormData.get('username')?.toString();
    if(email && password){
        const credentialUser= await createUserWithEmailAndPassword(auth, email, password);
        const user= credentialUser.user;
        await updateProfile(user, {
            displayName: username,
        });
        console.log(user);
        console.log(user.email);
        return {
            state: true,
            message: "User created successfully",
            
        }
        
    }
} catch(err){
    return {
        state: false,
        message: "Something went wrong when registering the user",
    }
    
}
}