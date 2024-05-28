import LightDarkToggle from '@/components/ui/light-dark-toggle';
import React from 'react'

type Props = {
    children?: React.ReactNode;
}

const LoggedOutLayout = ({ children }: Props) => {
    return (
        <>
            <div className='flex flex-col gap-4 items-center justify-center min-h-screen p-24'>
                {children}
            </div>
            <LightDarkToggle className="fixed top-[calc(50%-12px)] right-4"/>
        </>
    )
}

export default LoggedOutLayout