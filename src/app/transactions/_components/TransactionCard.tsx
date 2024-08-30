"use client";

import { TransactionEntity } from "@/entities/TransactionEntity";
import { useAuthContext } from "@/hooks/useAuthContext";
import React from "react";
import { GrTransaction } from "react-icons/gr";

interface TransactionCardProps {
  transaction: TransactionEntity;
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  const { user } = useAuthContext();

  return (
    <div className="min-w-96 dark:bg-neutral-900 rounded-md shadow-md p-4 mt-4 flex justify-between items-center">
      <p>
        {transaction.receiver.id === user?.id
          ? transaction.sender.name
          : transaction.receiver.name}
      </p>
      <div className="flex gap-2 leading-8">
        <p>${transaction.value.toFixed(2)}</p>
        <GrTransaction
          className={
            "rounded-full size-8 p-2 text-white" +
            (transaction && transaction.sender.id === user?.id
              ? " bg-red-600"
              : " bg-blue-600")
          }
        />
      </div>
    </div>
  );
}
