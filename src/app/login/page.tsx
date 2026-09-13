import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SignInForm from '@/components/sign-in-form'
function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <Card className='w-2/5'>
        <CardHeader>
            <CardTitle className='font-3xl font-semibold'>Sign In</CardTitle>
            <CardDescription>Log in to the platform with email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm/>
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
