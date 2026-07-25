import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TUMI Studio | Roblox Game Experiences",
  description: "TUMI Studio 是一家专注于 Roblox 平台游戏开发、内容制作与长期运营的创意工作室。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
