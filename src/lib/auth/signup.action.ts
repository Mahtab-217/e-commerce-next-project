"use server"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../../db/firebase.config";
import { cookies } from "next/headers";
import z from "zod";
import { redirect } from "next/navigation";


const registerSchema =z.object({
    username: z.string().min(3, "The username must be at least 3 chars"),
    email: z.string('The email must be string'),
    password: z.string().min(5," The password must be at least 5 chars"),

});

export async function register(prev: unknown, FormData:FormData){

try{
  
      
    const result= registerSchema.safeParse({
        username: FormData.get("username")?.toString(),
        password: FormData.get("password")?.toString(),
        email: FormData.get("email")?.toString(),

    });
    if(!result.success){
        return{

            state: false,
            message: result.error.issues[0].message
        }
    }
    const {email, password, username}= result.data;  
        const credentialUser= await createUserWithEmailAndPassword(auth, email, password);
        const user= credentialUser.user;
        await updateProfile(user, {
            displayName: username,
        });
       const cookieInfo= await  cookies();
       cookieInfo.set("token", user.uid,{
        maxAge: 60*60*24*8,

       });
       if(user){

           redirect("/");
       }
        return {
            state: true,
            message: "User created successfully",
            
        }
        
    
} catch(err){
    return {
        state: false,
        message: "Something went wrong when registering the user",
    }
    
}
}