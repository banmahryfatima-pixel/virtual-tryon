import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vtry — Virtual Try-On Platform',
  description: 'AI-powered virtual fitting studio for Gulf e-commerce stores',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&family=Noto+Kufi+Arabic:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}