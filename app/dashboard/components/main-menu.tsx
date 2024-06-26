import React from 'react'
import MenuTitle from './menu-title'
import MenuItem from './menu-item'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import LightDarkToggle from '@/components/ui/light-dark-toggle'

const MainMenu = () => {
    return (
        <nav className="bg-muted overflow-auto p-4 flex flex-col">
            <header className='border-b dark:border-b-black border-b-zinc-300 py-4 mb-4'>
                <MenuTitle />
            </header>
            <ul className="py-4 grow">
                <MenuItem href="/dashboard">My Dashboard</MenuItem>
                <MenuItem href="/dashboard/teams">Teams</MenuItem>
                <MenuItem href="/dashboard/employees">Employees</MenuItem>
                <MenuItem href="/dashboard/account">Account</MenuItem>
                <MenuItem href="/dashboard/settings">Settings</MenuItem>
            </ul>
            <footer className='flex items-center gap-2'>
                <Avatar>
                    {/* <AvatarImage src=" https://github.com/shadcn.png" /> */}
                    <AvatarFallback className="bg-pink-300 dark:bg-pink-800">CN</AvatarFallback>
                </Avatar>
                <Link href="/" className="hover:underline">Logout</Link>
                <LightDarkToggle className="ml-auto"/>
            </footer>
        </nav>
    )
}

export default MainMenu