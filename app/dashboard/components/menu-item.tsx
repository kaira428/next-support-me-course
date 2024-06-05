"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
    href: string,
    children: React.ReactNode
}

const MenuItem = ({ href, children }: Props) => {

    const pathName = usePathname();

    const isActive = href === pathName;

    return (
        <li>
            <Link className={cn("block hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground p-2",
                isActive && "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground"
            )} href={href}>
                {children}
            </Link>
        </li>
    )
}

export default MenuItem