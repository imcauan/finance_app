import { UserEntity } from "@/entities/UserEntity";
import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export function useGetUserByEmail() {
  const GetUserByEmailFn = async (email: string) => {
    const { data } = await api.get<UserEntity>(`users/${email}`);

    console.log(data);
    return data;
  };

  return useMutation({
    mutationFn: GetUserByEmailFn,
  });
}
