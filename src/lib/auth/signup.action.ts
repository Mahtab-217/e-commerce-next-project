"use server"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../../db/firebase.config";
import { cookies } from "next/headers";

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
       const cookieInfo= await  cookies();
       cookieInfo.set("token", user.uid,{
        maxAge: 60*60*24*8,
       });

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