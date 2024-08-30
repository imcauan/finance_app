"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TransactionEntity } from "@/entities/TransactionEntity";
import { useAuthContext } from "@/hooks/useAuthContext";
import { GrTransaction } from "react-icons/gr";

interface LastTransactionCardProps {
  transactions: TransactionEntity[];
}

export function LastTransactionCard({
  transactions,
}: LastTransactionCardProps) {
  const { user } = useAuthContext();
  return (
    <Card className="min-w-96 rounded-md shadow-md dark:bg-neutral-900">
      <CardHeader className="font-semibold text-lg">Transactions</CardHeader>
      <CardContent className="flex flex-col gap-2">
        {transactions.map((t) => (
          <div key={t.id} className="w-full flex justify-between items-center">
            <p>{t.receiver.name}</p>
            <div className="flex gap-2 leading-8">
              <p>${t.value.toFixed(2)}</p>
              <GrTransaction
                className={
                  "rounded-full size-8 p-2 text-white" +
                  (t.sender.id === user?.id ? " bg-red-600" : " bg-blue-600")
                }
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
