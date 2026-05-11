import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '寻隐者 — 灵魂文学家匹配测试',
  description: '在文学的星空中，找到那颗与你灵魂共振的星球。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  )
}
