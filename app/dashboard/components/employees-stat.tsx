import { Card } from '@/components/ui/card'
import React from 'react'

const EmployeeStats = () => {
  return (
      <div className='grid lg:grid-cols-3 gap-4'>
          <Card>
             Card 1 
          </Card>
          <Card>
             Card 2 
          </Card>
          <Card>
             Card 3 
          </Card>
    </div>
  )
}

export default EmployeeStats