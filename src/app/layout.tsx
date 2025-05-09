import type {Metadata} from "next"
import {Geist} from "next/font/google"
import "./globals.css"
import {ThemeProvider} from "@/components/theme-provider"
import {clsx} from "clsx"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "WavyCat",
  description: "Ever-sleepy cat-girl and software engineer from Russia",
  twitter: {
    title: "WavyCat",
    description: "Ever-sleepy cat-girl and software engineer from Russia",
  }
}

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={clsx(geistSans.variable, 'antialiased')}>
    <ThemeProvider attribute="class"
                   defaultTheme="system"
                   enableSystem
                   disableTransitionOnChange>
      {children}
    </ThemeProvider>
    </body>
    </html>
  )
}