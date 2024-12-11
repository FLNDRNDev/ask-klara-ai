import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cookies from 'js-cookie';

import { ClerkProvider } from "@clerk/nextjs";
import ClientLanguageProvider from '@/components/ClientLanguageProvider';
import { TranslationProvider } from '@/app/context/TranslationContext';

import "./globals.css";

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
	title: "ask Klara™",
	description: "ask Klara AI powered customer chatbot",
	icons: {
		icon: [
		  { rel: "icon", url: "/favicon.svg", sizes: "any" },
		  { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
		  { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
		],
	 },
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	// Fetch the language from the cookie (default to 'en')
	const languageFromCookie = Cookies.get('language') || 'en';
	
	return (
		<ClerkProvider>
			<TranslationProvider initialLanguage={languageFromCookie}>
				<html lang="en">
					<body className={inter.className}>
						{children}
					</body>
				</html>
			</TranslationProvider>
		</ClerkProvider>
	);
}
