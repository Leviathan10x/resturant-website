"use client";

import MenuSection from "@/sections/menu";
import Head from "next/head";

export default function Menu() {
  return (
    <>
      <Head>
        <title>Pakman Alitas</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <MenuSection />
      </main>
    </>
  );
}
