import { currentUser } from '@clerk/nextjs'
import React from 'react'


type Props = {
   children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
   const user = await currentUser

   return (
      <div>Layout</div>
   )
}

export default Layout
