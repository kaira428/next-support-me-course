import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmployeeStats from './components/employees-stat'

const DashboardPage = () => {
  return (
    <div>
      <Tabs defaultValue="employees">
        <TabsList className="mb-4">
          <TabsTrigger value="employees">Employees Status</TabsTrigger>
          <TabsTrigger value="teams">Teams Status</TabsTrigger>
        </TabsList>
        <TabsContent value="employees">
          <EmployeeStats />
        </TabsContent>
        <TabsContent value="teams">Teams stat view</TabsContent>
      </Tabs>
    </div>
  )
}

export default DashboardPage