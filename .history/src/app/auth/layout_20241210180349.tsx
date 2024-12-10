import React from 'react'
import { redirect } from 'next/navigation'

import { currentUser } from '@clerk/nextjs'


type Props = {
   children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
   const user = await currentUser()

   if (user) redirect('/')

   return (
      <>
         <div className="h-screen flex w-full justify-center">

         </div>
      </>
   )
}

export default Layout
