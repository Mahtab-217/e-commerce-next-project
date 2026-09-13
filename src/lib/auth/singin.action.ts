import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../db/firebase.config";
import { getDisplayName } from "next/dist/shared/lib/utils";

export async function login(prev: unknown, FormData: FormData){
    try{
        const email= FormData.get("email")?.toString();
        const password= FormData.get("password")?.toString();
        if(email && password){
         const credentialUser= await signInWithEmailAndPassword(auth, email, password);
        const user= credentialUser.user;
        if(!user){
            return{
                state: false,
                message: "Email or password is uncorrect",
            }
        }
        console.log(user.displayName);

        }
        return {
            state: true,
            message: "User logged in successfully",
        }
    }catch(e){
        return {
            state: false,
            message: "Something went wrong",
        };
    }
}