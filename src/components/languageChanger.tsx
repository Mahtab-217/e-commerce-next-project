import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'

function LanguageChanger() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            زبان
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuGroup>
            <DropdownMenuLabel>تغیر زبان</DropdownMenuLabel>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>فارسی</DropdownMenuItem>
            <DropdownMenuItem>پشتو</DropdownMenuItem>
        </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageChanger
