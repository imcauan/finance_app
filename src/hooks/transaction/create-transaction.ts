import { TransactionEntity } from "@/entities/TransactionEntity";
import { TransactionType } from "@/enums/transaction-type.enum";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ICreateTransactionRequest {
  from: string;
  to: string;
  value: number;
  type: TransactionType;
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();
  const CreateTransactionFn = async (data: ICreateTransactionRequest) => {
    try {
      const { data: transaction } = await api.post<TransactionEntity>(
        "users/new_transaction",
        data
      );

      queryClient.invalidateQueries({ queryKey: ["transactions "] });
      return transaction;
    } catch (error) {
      console.log(error);
    }
  };

  return useMutation({
    mutationFn: CreateTransactionFn,
  });
}
