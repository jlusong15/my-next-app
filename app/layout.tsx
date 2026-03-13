import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import MenuNav from "./components/MenuNav"
import "./globals.css"
import Providers from "./providers"
import { NavLinks } from "./types/nav.model"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "My React NextJS App",
	description: "Created by Jennifer Bautista",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<MenuNav navigation={NavLinks} />
					{children}
				</Providers>
			</body>
		</html>
	)
}
