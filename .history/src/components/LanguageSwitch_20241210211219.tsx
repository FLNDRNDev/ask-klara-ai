'use client';

import React, { useState } from 'react';
import { useTranslationContext } from '@/app/context/TranslationContext';
import Image from 'next/image';

const LanguageSwitcher = () => {
   const { language, setLanguage } = useTranslationContext();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const languages = [
      { code: 'de', label: 'Deutsch', flags: ['de.svg', 'ch.svg', 'at.svg', 'be.svg', 'lu.svg'] },
      { code: 'en', label: 'English', flags: ['gb.svg', 'us.svg'] },
      { code: 'es', label: 'Español', flags: ['es.svg', 'mx.svg'] },
      { code: 'fr', label: 'Français', flags: ['fr.svg', 'be.svg', 'lu.svg'] },
      { code: 'it', label: 'Italiano', flags: ['it.svg', 'ch.svg'] },
      { code: 'nl', label: 'Nederlands', flags: ['be.svg', 'nl.svg'] },
      { code: 'tr', label: 'Türkçe', flags: ['tr.svg', 'cy.svg'] },
   ];

   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

   const selectLanguage = (lang: string) => {
      setLanguage(lang);
      setIsDropdownOpen(false);
   };

   return (
      <div className="language-switcher relative">
         {/* Header Button */}
         <button
            onClick={toggleDropdown}
            className="flex items-center justify-between gap-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200"
         >
            <span className="text-[13px] font-light hidden sm:inline">
               {languages.find((lang) => lang.code === language)?.label}
            </span>
            <div className="flex space-x-1">
               {languages
                  .find((lang) => lang.code === language)
                  ?.flags.map((flag, index) => (
                     <Image
                        key={index}
                        src={`/flags/${flag}`}
                        alt={language}
                        width={18}
                        height={18}
                        className="rounded-full"
                        style={{ borderRadius: '50%' }}
                     />
                  ))}
            </div>
         </button>

         {/* Dropdown Menu */}
         {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
               {languages.map((lang) => (
                  <li
                     key={lang.code}
                     className={`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                        lang.code === language ? 'bg-gray-100' : ''
                     }`}
                     onClick={() => selectLanguage(lang.code)}
                  >
                     <div className="flex items-center space-x-2">
                        <span className="text-[13px] font-light w-24">{lang.label}</span>
                        {lang.flags.map((flag, index) => (
                           <Image
                              key={index}
                              src={`/flags/${flag}`}
                              alt={lang.label}
                              width={16}
                              height={16}
                              className="rounded-full"
                              style={{ borderRadius: '50%' }}
                           />
                        ))}
                     </div>
                     {lang.code === language && (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="2"
                           stroke="currentColor"
                           className="w-5 h-5 ml-1 text-green-500"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                     )}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default LanguageSwitcher;
