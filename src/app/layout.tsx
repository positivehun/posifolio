import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@rive-app/canvas@latest/rive.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
} 