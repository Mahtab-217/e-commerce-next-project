"use client"
import React, { useActionState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { register } from '@/lib/auth/signup.action'

function SignUpForm() {
   const [data, action, pending]= useActionState(register,{
        state: false,
        message:"", 
    })
  return (
      <form action={action} className='w-full grid gap-3'>
                <div className='grid gap-2'>   
                    <Label htmlFor='username'>User Name</Label>
                    <Input type='text' id='username' required name='username' />
                </div>
                <div className='grid gap-2'>   
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' required name='email' />
                </div>
                 <div className='grid gap-2'>   
                    <Label htmlFor='password '>Password</Label>
                    <Input type='password' id='email'  required name='password' />
                </div>
                <Button type='submit' disabled={pending} className='bg-black text-white'>{pending? "Please wait...": "Create Account"}</Button>
                  
            </form>
  )
}

export default SignUpForm
