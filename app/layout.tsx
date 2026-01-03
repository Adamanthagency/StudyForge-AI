import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudyForge AI - Elite Study Coach',
  description: 'AI-powered study coach for math, biology, dropshipping, and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}