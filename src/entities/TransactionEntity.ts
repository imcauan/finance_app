import { UserEntity } from "./UserEntity";

export interface TransactionEntity {
  id: string;
  sender: UserEntity;
  receiver: UserEntity;
  value: number;
}
