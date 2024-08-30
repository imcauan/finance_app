import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { CardEntity } from "@/entities/CardEntity";
import { CardType } from "@/enums/card-type.enum";
import { useDeleteCard } from "@/hooks/card/delete-card";
import { Separator } from "@radix-ui/react-context-menu";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";

interface CardProps {
  card: CardEntity;
}
export function Card({ card }: CardProps) {
  const { mutateAsync: DeleteCardFn } = useDeleteCard();
  async function handleDeleteCard() {
    await DeleteCardFn(card.id);
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className={
            card.type === CardType.CREDIT
              ? "min-w-72 bg-blue-600 rounded-md p-3 text-white"
              : "min-w-72 bg-white rounded-md p-3 text-black border shadow-md"
          }
        >
          <div className="flex w-full justify-between p-2">
            <h1 className="font-semibold">{card.flag}</h1>
            <h1 className="font-semibold">
              {card.number.toString().replace(/.*(?=.{4})/, "****")}
            </h1>
          </div>
          <div className="flex flex-col w-full h-full mt-8 px-2">
            <p className="text-sm">Credit limit</p>
            <p className="font-bold text-xl">
              $ {card.credit_limit.toFixed(2)}
            </p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="border rounded-md bg-white p-4 w-full shadow-lg">
        <ContextMenuItem className="flex gap-3 items-center">
          <MdModeEdit />
          Edit
        </ContextMenuItem>
        <Separator />
        <ContextMenuItem
          className="flex gap-3 items-center"
          onClick={handleDeleteCard}
        >
          <FaDeleteLeft />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
