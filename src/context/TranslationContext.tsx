'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface TranslationContextProps {
   language: string;
   setLanguage: (language: string) => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({
   children,
   initialLanguage = 'en', // Default to English if not provided
}: {
   children: ReactNode;
   initialLanguage?: string;
}) => {
   const [language, setLanguageState] = useState<string>(initialLanguage);

   // Update language in state and cookie
   const setLanguage = (language: string) => {
      setLanguageState(language);
      Cookies.set('language', language, { expires: 365 }); // Store the language in cookies for a year
   };

   useEffect(() => {
      // On mount, check if the language cookie exists
      const storedLanguage = Cookies.get('language');
      if (storedLanguage) {
         setLanguageState(storedLanguage);
      }
   }, []);

   return (
      <TranslationContext.Provider value={{ language, setLanguage }}>
         {children}
      </TranslationContext.Provider>
   );
};

export const useTranslationContext = () => {
   const context = useContext(TranslationContext);
   if (!context) {
      throw new Error('useTranslationContext must be used within a TranslationProvider');
   }
   return context;
};
