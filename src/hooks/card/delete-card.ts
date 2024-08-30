import { CardEntity } from "@/entities/CardEntity";
import { api } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteCard() {
  const queryClient = useQueryClient();
  const DeleteCardFn = async (id: string) => {
    await api.delete<CardEntity>(`/users/cards/${id}`);
    queryClient.invalidateQueries({ queryKey: ["cards"] });
  };

  return useMutation({
    mutationFn: DeleteCardFn,
  });
}
