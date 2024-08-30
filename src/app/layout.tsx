import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

/**
 * @description - The root layout of the application
 * @param {React.ReactNode} children - The children
 * @return {JSX.Element} - The root layout
 */

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
