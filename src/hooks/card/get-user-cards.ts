import { CardEntity } from "@/entities/CardEntity";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

export function useGetUserCards() {
  const { user } = useAuthContext();
  const GetUserCardsFn = async () => {
    try {
      const { data } = await api.get<CardEntity[]>(
        `/users/user_cards/${user?.id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return useQuery({
    queryKey: ["cards"],
    queryFn: GetUserCardsFn,
  });
}
