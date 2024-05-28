"use client"

import React, { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { MoonIcon, SunIcon } from 'lucide-react';

type Props = {
    className?: string
}

const LightDarkToggle = ({ className }: Props) => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger
                    className={className}
                    onClick={
                        () => {
                            setIsDarkMode(prevState => !prevState)
                            document.body.classList.toggle("dark")
                        }
                    }>
                    {isDarkMode ? <SunIcon /> : <MoonIcon />}
                </TooltipTrigger>
                <TooltipContent>
                    {isDarkMode ? "Enable Light mode" : "Enable Dark mode"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default LightDarkToggle