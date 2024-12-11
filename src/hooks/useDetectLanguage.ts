'use client'

import { useEffect, useState } from 'react';


const useDetectLanguage = () => {
   const [language, setLanguage] = useState<string>('en'); // Default to English

   useEffect(() => {
      // Use only navigator.language (userLanguage is not standard)
      const userLanguage = navigator.language;

      if (userLanguage.startsWith('nl')) {
         setLanguage('nl'); // Set to Dutch if the detected language starts with 'nl'
      } else {
         setLanguage('en'); // Default to English for all other cases
      }
   }, []);

   return language;
};

export default useDetectLanguage;
