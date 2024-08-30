import { CardEntity } from "./CardEntity";
import { TransactionEntity } from "./TransactionEntity";

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  image?: string;
  transactions: TransactionEntity[];
  cards: CardEntity[];
  balance: number;
  credit_limit: number;
  monthly_budget: number;
}
