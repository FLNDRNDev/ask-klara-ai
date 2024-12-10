import React from 'react'
import { currentUser } from '@clerk/nextjs'


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
