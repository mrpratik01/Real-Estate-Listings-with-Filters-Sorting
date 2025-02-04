// app/layout.tsx

import { ReactNode } from "react";
import Head from "next/head";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>Hi</h1>
      <main>{children}</main>
    </>
  );
}
