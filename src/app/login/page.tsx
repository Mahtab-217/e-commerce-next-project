import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <Card className='w-2/5'>
        <CardHeader>
            <CardTitle className='font-3xl font-semibold'>Sign In</CardTitle>
            <CardDescription>Log in to the platform with email and password</CardDescription>
        </CardHeader>
        <CardContent>
            <form className='w-full grid gap-5'>
                <div className='grid gap-2'>   
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' required name='email' />
                </div>
                 <div className='grid gap-2'>   
                    <Label htmlFor='password '>Password</Label>
                    <Input type='password' id='email'  required name='password' />
                </div>
                <Button className='bg-black text-white'>
                    Sign In
                </Button>
            </form>
            <div className='mt-4'>
                <Link href="/forgot-password" className='hover:cursor-pointer hover:text-green-500'>Forgot Password?</Link>
            </div>
            <div className='w-full grid justify-center gap-2'>
                <div className='border py-2 px-5 rounded-sm'>Sign In With <span className='text-red-700'>Google</span> </div>
                <div className='border py-2 px-5 rounded-sm'>Sign In With <span className='text-purple-700'>Github</span> </div>
            </div>
        </CardContent>
    </Card>
    </div>
  )
}

export default page
