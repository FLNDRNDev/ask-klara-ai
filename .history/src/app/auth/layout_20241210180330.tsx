import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'


type Props = {
   children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
   const user = await currentUser()

   if (user) redirect('/')

   return (
      <>
         <div className="h-screen flex w-full justify-between">

         </div>
      </>
   )
}

export default Layout
