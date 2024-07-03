import type { Metadata } from "next";
import React from "react";
// components
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "Azuki NFT DApp | Powered by QuickNode",
  description:
    "Inside the Azuki NFT, building the future of anime for an enriching anime fan experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
