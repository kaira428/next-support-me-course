import { PersonStandingIcon } from 'lucide-react'
import React from 'react'

const MenuTitle = () => {
    return (
        <h4 className='flex items-center gap-1'>
            <PersonStandingIcon size={40} className='text-primary' />
            SupportMe
        </h4>
    )
}

export default MenuTitle