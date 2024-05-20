"use client";

import './app.css'
import './globals.css'
import './style.css'

import React from 'react';
import FacebookPixel from './facebookPixel';

export default function RootLayout({ children }) {
  const pixelId = '819900423353826'; // แทนที่ด้วย Facebook Pixel ID ของคุณ

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Next.js App</title>
      </head>
      <body>
        <FacebookPixel pixelId={pixelId} />
        {children}
      </body>
    </html>
  );
}
