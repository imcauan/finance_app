import { CardEntity } from "@/entities/CardEntity";
import { CardType } from "@/enums/card-type.enum";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreateCardRequest {
  number: number;
  cvv: number;
  credit_limit: number;
  type: CardType;
  owner_id: string;
  flag: string;
}

export function useCreateCard() {
  const queryClient = useQueryClient();
  const CreateCardFn = async (data: CreateCardRequest) => {
    console.log(data);
    try {
      const { data: card } = await api.post<CardEntity>("users/new_card", data);
      queryClient.invalidateQueries({ queryKey: ["cards"] });
      return card;
    } catch (error) {
      console.log(error);
    }
  };
  return useMutation({
    mutationFn: CreateCardFn,
  });
}
