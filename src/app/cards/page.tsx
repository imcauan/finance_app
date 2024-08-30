"use client";

import { CreateCardForm } from "./_components/card/CreateCardForm";
import { LinksBar } from "../../components/shared/LinksBar";
import { Header } from "@/components/shared/Header";
import { UserCards } from "./_components/card/UserCards";
import { useGetUserCards } from "@/hooks/card/get-user-cards";

export default function Page() {
  const { data: cards } = useGetUserCards();

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="flex flex-col w-full items-center gap-4 md:gap-0">
        <Header />
        <LinksBar />
        <CreateCardForm />
        <UserCards cards={cards || []} />
      </div>
    </div>
  );
}
