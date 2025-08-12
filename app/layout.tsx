import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'luxury FashionTV cosmetics',
  description: 'Experience the elegance of luxury FashionTV cosmetics, where fashion meets beauty.',
  keywords: ['fashion', 'luxury FashionTV cosmetics', 'luxury', 'cosmetics', 'beauty'],
  authors: [{ name: 'luxury FashionTV cosmetics' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function