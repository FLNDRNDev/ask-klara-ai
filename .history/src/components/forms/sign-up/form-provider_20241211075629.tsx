import React from 'react'

import { AuthContextProvider } from '@/context/use-auth-context'


type Props = {
   children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
   return (
      <>
         <AuthContextProvider>

         </AuthContextProvider>
      </>
   )
}

export default SignUpFormProvider