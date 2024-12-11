'use client'

import { useState } from 'react'

import { useSignUp } from '@clerk/nextjs'
import { useToast } from '../use-toast'


export const useSignUpForm = () => {
   const { toast } = useToast()
   const [loading, setLoading] = useState<boolean>(false) 
   const { signUp } = useSignUp()

}
