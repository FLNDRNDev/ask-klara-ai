'use client'

import { useState } from 'react'
import { useToast } from '../use-toast'


export const useSignUpForm = () => {
   const { toast } = useToast()
   const [loading, setLoading] = useState<boolean>(false) 

}
