import { Button } from '@/components/ui/button'
import React from 'react'
import { PersonStandingIcon } from 'lucide-react'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <>
      <h1 className='flex gap-2 items-center'>
        <PersonStandingIcon size={50} className='text-pink-500' />
        SupportMe
      </h1>

      <p>The best dashboard to manage customer support</p>

      <div className='flex justify-center items-center gap-2'>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </>
  )
}

export default LandingPage