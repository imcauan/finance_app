"use client";

import { BottomBar } from "@/components/shared/Bottombar/Bottombar";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Card } from "./card/Card";
import { CreateCardForm } from "./card/CreateCardForm";
import { LinksBar } from "../home/_components/LinksBar";
import { Header } from "@/components/shared/Header";
import { UserCards } from "./card/UserCards";
import { useGetUserCards } from "@/hooks/card/get-user-cards";
import { Checkbox } from "@/components/ui/checkbox";

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
