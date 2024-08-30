"use client";

import { Header } from "@/components/shared/Header";
import { LastTransactionCard } from "./_components/LastTransactionsCard";
import { LinksBar } from "./_components/LinksBar";
import { useGetUserTransactions } from "@/hooks/transaction/get-user-transactions";

export default function Page() {
  const { data: transactions } = useGetUserTransactions();
  return (
    <div className="bg-white dark:bg-neutral-950 w-full flex h-screen">
      <div className="flex flex-col w-full gap-3">
        <Header />
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <LinksBar />
          <LastTransactionCard transactions={transactions || []} />
        </div>
      </div>
    </div>
  );
}
