import React from 'react'
import Image from 'next/image'
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
            <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
               <Image 
                  src='/images/Logo.svg'
                  alt='ask Klara brand logo'
                  sizes='100vw'
                  style={{
                     width: '20%',
                     height: 'auto',
                  }}
                  width={0}
                  height={0}
               />
               { children }
            </div>

            <div className="hidden lg:flex flex-col flex-1 w-full max-h-full max-w-4000px overfow-hidden relative bg-cream pt-10 pl-24 gap-3">
               <h2 className="text-gravel md:text-4xl font-bold">
                  Hi, I'm your AI powered sales assistent, Klara!
               </h2>
               <p className="text-iridium md:text-sm mb-10">
                  Klara is capable of capturing lead information without a form... {''}
                  <br />
                  something never done before
               </p>
            </div>
         </div>
      </>
   )
}

export default Layout