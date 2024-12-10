import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
	title: "ask Klara™",
	description: "ask Klara AI powered customer chatbot",
	icons: {
		icon: "/public/favicon.svg",
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
