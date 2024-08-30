import { CardType } from "@/enums/card-type.enum";

export interface CardEntity {
  id: string;
  number: number;
  cvv: string;
  credit_limit: number;
  type: CardType;
  owner_id: string;
  flag: string;
}
