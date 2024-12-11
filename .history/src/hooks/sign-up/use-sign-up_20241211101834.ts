'use client'

import { useState } from 'react'
import { useToast } from '/src/components/ui/use-toast.ts'



export const useSignUpForm = () => {
   const { toast } = useToast()
   const [loading, setLoading] = useState() 
}
