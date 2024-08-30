import React from "react";
import { AsideImage } from "./_components/AsideImage";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-50 dark:bg-stone-950 flex w-full h-screen">
      <AsideImage />
      {children}
    </div>
  );
}
