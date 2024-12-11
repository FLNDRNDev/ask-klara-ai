'use client'

import { useState } from 'react'
import { useToast } from '../use-toast'
import { useSignUp } from '@clerk/nextjs'


export const useSignUpForm = () => {
   const { toast } = useToast()
   const [loading, setLoading] = useState<boolean>(false) 
   const { signUp } = useSignUp()

}
