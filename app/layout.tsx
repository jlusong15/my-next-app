import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import MenuNav from "../components/shared/MenuNav"
import "./globals.css"
import Providers from "./providers"
import { NavLinks } from "../types/nav.model"

import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import "froala-editor/css/plugins.pkgd.min.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "My React Next.js App",
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
