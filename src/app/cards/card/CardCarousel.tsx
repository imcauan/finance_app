import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CardEntity } from "@/entities/CardEntity";
import { Card } from "./Card";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ContextMenuContent } from "@radix-ui/react-context-menu";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CardCarouselProps {
  cards: CardEntity[];
}

export function CardCarousel({ cards }: CardCarouselProps) {
  return (
    <div className="w-full h-full">
      <Carousel>
        <CarouselContent className="flex max-w-96 px-4 gap-3 justify-start">
          {cards.map((card) => (
            <ContextMenu>
              <ContextMenuTrigger>
                <Card key={card.id} card={card} />
              </ContextMenuTrigger>
              <ContextMenuContent className="border rounded-md bg-white p-4 w-full shadow-lg">
                <ContextMenuItem className="flex gap-3 items-center">
                  <MdModeEdit />
                  Edit
                </ContextMenuItem>
                <Separator />
                <ContextMenuItem>
                  <FaDeleteLeft />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
