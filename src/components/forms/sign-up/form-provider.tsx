import React from 'react'

import { AuthContextProvider } from '@/context/use-auth-context'


type Props = {
   children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
   return (
      <>
         {/* <AuthContextProvider>
            <FormProvider></FormProvider>
         </AuthContextProvider> */}
      </>
   )
}

export default SignUpFormProvider
