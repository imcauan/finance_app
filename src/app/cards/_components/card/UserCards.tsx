import { CardCarousel } from "./CardCarousel";
import { CardEntity } from "@/entities/CardEntity";

interface UserCardsProps {
  cards: CardEntity[];
}

export function UserCards({ cards }: UserCardsProps) {
  return (
    <div className="flex justify-center mt-4 gap-4">
      <CardCarousel cards={cards || []} />
    </div>
  );
}
