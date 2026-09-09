import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SignUpForm from '@/components/sign-up-form'
function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <Card className='w-2/5'>
        <CardHeader>
            <CardTitle className='font-3xl font-semibold text-center '>Sign Up</CardTitle>
            <CardDescription>Sign up to the platform with email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm/>
            <div className='mt-4'>
                <Link href="/login" className='hover:cursor-pointer hover:text-green-500'>Already have an acount?</Link>
            </div>
            <div className='w-full mt-2 grid gap-2'>
                <div className='border w-full text-center py-2 px-5 rounded-sm'>Sign In With <span className='text-red-700'>Google</span> </div>
                <div className='border w-full text-center py-2 px-5 rounded-sm'>Sign In With <span className='text-purple-700'>Github</span> </div>
            </div>
        </CardContent>
    </Card>
    </div>
  )
}

export default page
