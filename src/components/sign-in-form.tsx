"use client";
import React, { useActionState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { login } from '@/lib/auth/singin.action';

function SignInForm() {
   const [data, action, pending]= useActionState (login,{
        state: false,
        message: "",
    });
  return (
    <form className='w-full grid gap-5'>
                <div className='grid gap-2'>   
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' required name='email' />
                </div>
                 <div className='grid gap-2'>   
                    <Label htmlFor='password '>Password</Label>
                    <Input type='password' id='email'  required name='password' />
                </div>
                <Button type='submit' disabled={pending} className='bg-black text-white   '>
                    {pending? "Signing in": "Sign In"}
                </Button>
              
            </form>
  )
}

export default SignInForm
