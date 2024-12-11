import { useState, useEffect } from 'react';
import { useTranslationContext } from '@/context/TranslationContext';

// Define a type for the structure of the JSON translations
interface TranslationData {
  [key: string]: string | TranslationData;
}

// Define the type for the translations object
type TranslationFiles = {
  [key: string]: () => Promise<{ default: TranslationData }>;
};

// Map translations to dynamic imports
const translations: TranslationFiles = {
  en: () => import('../locals/en/translation.json'),
  nl: () => import('../locals/nl/language.json'),
};

const useTranslation = () => {
  const { language } = useTranslationContext(); // Get the language from context
  const [translation, setTranslation] = useState<TranslationData>({});

  useEffect(() => {
    const loadTranslation = async () => {
      if (translations[language]) {
        const langModule = await translations[language]();
        setTranslation(langModule.default); // Load the correct translations
      }
    };
    loadTranslation();
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: TranslationData | string | undefined = translation;

    for (const part of keys) {
      if (result && typeof result === 'object' && part in result) {
        result = result[part];
      } else {
        return key; // Return the key itself if not found
      }
    }

    return typeof result === 'string' ? result : key;
  };

  return { t, language };
};

export default useTranslation;
