import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://tumi-company-website.vercel.app"
  ),
  title: "TUMI Studio | Roblox Game Experiences",
  description:
    "TUMI Studio 专注于 Roblox 平台游戏开发、内容更新与社区运营。",
  openGraph: {
    title: "TUMI Studio",
    description:
      "创造值得被玩家记住的 Roblox 游戏世界。",
    url: "https://tumi-company-website.vercel.app",
    siteName: "TUMI Studio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TUMI Studio",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
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