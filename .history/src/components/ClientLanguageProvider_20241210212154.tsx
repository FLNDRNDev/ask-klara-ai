'use client';

import React from 'react';
import { TranslationProvider } from '@/app/context/TranslationContext';
import useDetectLanguage from '@/hooks/useDetectLanguage';


const ClientLanguageProvider = ({ children }: { children: React.ReactNode }) => {
   const detectedLanguage = useDetectLanguage(); // Detect language dynamically

   return (
      <TranslationProvider initialLanguage={detectedLanguage}>
         {children}
      </TranslationProvider>
   );
};

export default ClientLanguageProvider;
