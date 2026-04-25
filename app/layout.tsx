import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "求偶智力量表测评",
  description: "评估您在择偶竞争中的认知能力、适应性偏差及策略表现",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
