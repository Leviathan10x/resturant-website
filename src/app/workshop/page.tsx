"use client";

import WorkshopSection from "@/sections/workshop";
import Head from "next/head";

export default function Menu() {
  return (
    <>
      <Head>
        <title>Restaurante Pakman Alitas</title>
      </Head>
      <main className="min-h-screen relative overflow-hidden">
        <WorkshopSection />
      </main>
    </>
  );
}
