import { TransactionEntity } from "@/entities/TransactionEntity";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

export function useGetUserTransactions() {
  const { user } = useAuthContext();
  const GetUserTransactionsFn = async () => {
    const { data } = await api.get<TransactionEntity[]>(
      `/users/transactions/${user?.id}`
    );

    return data;
  };

  return useQuery({
    queryKey: ["transactions"],
    queryFn: GetUserTransactionsFn,
  });
}
