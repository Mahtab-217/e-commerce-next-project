"use client"
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../db/firebase.config';
import { Button } from './ui/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';


function NavBar() {
   const [user, setUSer]= useState<User|null>(null);
   const router= useRouter();
    const {theme, setTheme}= useTheme();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if( user){
                setUSer(user); 
             
            }
        })
    }, []);
    async function handleLogout(){
        await signOut(auth);
        // router.refresh();   
    }
  return (
    <div className='w-full py-4 border-b backdrop-blur-md fixed top-0 left-0 px-2 flex justify-between items-center '>
        <div>LOGO</div>
        <div className='flex gap-4 items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger>{theme == "light"? (<Sun/>): theme == "dark"? (<Moon/>): (<SunMoon/>)}</DropdownMenuTrigger>
                <DropdownMenuSeparator/>
                <DropdownMenuContent>
                    <DropdownMenuGroup>

                    <DropdownMenuLabel>Theme</DropdownMenuLabel>
                    <DropdownMenuItem onClick={()=>setTheme("light")}>light<Sun/></DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>setTheme("dark")}>dark<Moon/></DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>setTheme("system")}>system<SunMoon/></DropdownMenuItem>
                    {/* <DropdownMenuItem></DropdownMenuItem> */}
                    </DropdownMenuGroup>

                </DropdownMenuContent>
            </DropdownMenu>
          {user?(
             <div className='flex space-x-2'>
                <Button onClick={handleLogout}>Log Out</Button>
                <div className='p-2 text-sm px-3 leading-none rounded-fullbg-grey-600 text-white flex justify-center items-center'>
                    {user.displayName?.slice(0,1).toLowerCase()}
                </div>
             </div>
          ): (
            <Button>
                <Link href="/login">Log In</Link>
            </Button>
          )}
        </div>
    </div>
  )
}

export default NavBar
