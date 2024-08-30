"use client";

import { TransactionCard } from "./_components/TransactionCard";
import { CreateTransaction } from "./_components/CreateTransaction";
import React from "react";
import { LinksBar } from "../home/_components/LinksBar";
import { Header } from "@/components/shared/Header";
import { useGetUserTransactions } from "@/hooks/transaction/get-user-transactions";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useAuthContext } from "@/hooks/useAuthContext";

export default function Page() {
  const { user } = useAuthContext();
  const [typeChecked, setTypeChecked] = React.useState<string | null>(null);
  const { data: transactions } = useGetUserTransactions();

  const filteredTransactions =
    typeChecked === "received"
      ? transactions?.filter((t) => t.sender.id !== user?.id)
      : transactions?.filter((t) => t.sender.id === user?.id);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="flex flex-col w-full items-center gap-4 md:gap-0">
        <Header />
        <LinksBar />
        <div className="flex w-full gap-2 justify-center items-center">
          <CreateTransaction />
          <div className="flex gap-2">
            <Checkbox
              id="received"
              onCheckedChange={(checked) => {
                setTypeChecked(checked ? "received" : null);
              }}
            />
            <Label htmlFor="received">Received</Label>
          </div>
          <div className="flex gap-2">
            <Checkbox
              id="sent"
              onCheckedChange={(checked) => {
                setTypeChecked(checked ? "sent" : null);
              }}
            />
            <Label htmlFor="sent">Sent</Label>
          </div>
        </div>
        {filteredTransactions || typeChecked !== null
          ? filteredTransactions?.map((t) => (
              <TransactionCard key={t.id} transaction={t} />
            ))
          : transactions?.map((t) => (
              <TransactionCard key={t.id} transaction={t} />
            ))}
      </div>
    </div>
  );
}
