import { UserEntity } from "@/entities/UserEntity";
import { api } from "@/services/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetUserById() {
  const GetUserByIdFn = async (id: string) => {
    const { data } = await api.get<UserEntity>(`/users/${id}`);
    return data;
  };

  return useMutation({
    mutationFn: GetUserByIdFn,
  });
}
