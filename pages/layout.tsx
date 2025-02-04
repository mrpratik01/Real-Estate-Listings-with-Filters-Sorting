// app/layout.tsx

import { ReactNode } from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Global CSS

export const metadata = {
  title: 'Real Estate Listings',
  description: 'Browse the latest real estate listings in your area.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Real Estate Listings</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}