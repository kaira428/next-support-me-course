import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const EmployeeStats = () => {
   return (
      <div className='grid lg:grid-cols-3 gap-4'>
         <Card>
            <CardHeader>
               <CardTitle className='text-base font-semibold'>
                  Total employees
               </CardTitle>
            </CardHeader>
            <CardContent className='flex items-center justify-between'>
               <div className="flex gap-2">
                  <UserIcon />
                  <div className='text-5xl font-bold'>100</div>
               </div>
               <div>
                  <Button size="xs" asChild>
                     <Link href="/dashboard/employees">
                        View all
                     </Link>
                  </Button>
               </div>
            </CardContent>
         </Card>
         <Card>
            <CardHeader>
               <CardTitle className='text-base font-semibold'>
                  Employees present
               </CardTitle>
            </CardHeader>

         </Card>
         <Card className='border-pink-300'>
            <CardHeader>
               <CardTitle className='text-base font-semibold'>
                  Employee of the month
               </CardTitle>
            </CardHeader>
         </Card>
      </div>
   )
}

export default EmployeeStats