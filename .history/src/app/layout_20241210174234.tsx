import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
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
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
