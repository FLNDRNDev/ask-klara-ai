import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cookies from 'js-cookie';

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import ClientLanguageProvider from "@/components/ClientLanguageProvider";
import { TranslationProvider } from "@/context/TranslationContext";

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
	// Fetch the language from the cookie (default to 'nl')
	const languageFromCookie = Cookies.get('language') || 'nl';

	return (
		<ClerkProvider>
			<TranslationProvider initialLanguage={languageFromCookie}>
				<html lang={languageFromCookie}>
					<body className={inter.className}>
						{children}


						{/* CUSTOM Toaster */}
						<Toaster
							position="bottom-center"
							toastOptions={{
								duration: 3000,
								className: 'custom-toast',
								style: {
									padding: '15px',
									
									textAlign: 'center',
									
									color: '#4a5568',
									backgroundColor: '#f8f9fa',

									border: '1px solid #e2e8f0',
									borderRadius: '8px',

									boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
								},
							}}
						/>
					</body>
				</html>
			</TranslationProvider>
		</ClerkProvider>
	);
}
