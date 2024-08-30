import { FormInput } from "@/components/shared/FormInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateCard } from "@/hooks/card/create-card";
import { useAuthContext } from "@/hooks/useAuthContext";
import { CardType } from "@/enums/card-type.enum";
import { SelectCardType } from "./SelectCardType";
import { CreateCardButton } from "./CreateCardButton";
import { GrNewWindow } from "react-icons/gr";

const formSchema = z.object({
  number: z.string().regex(/^\d+$/).min(16).max(16),
  cvv: z.string().regex(/^\d+$/).min(3).max(3),
  type: z.coerce.number(),
  flag: z.string(),
});

export function CreateCardForm() {
  const { user } = useAuthContext();
  const { mutate: CreateCardFn } = useCreateCard();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: "",
      cvv: "",
      type: 1,
      flag: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    CreateCardFn({
      number: +data.number,
      cvv: +data.cvv,
      type: data.type as CardType,
      credit_limit: 0,
      flag: data.flag,
      owner_id: user?.id || "",
    });
  }

  return (
    <Dialog>
      <DialogTrigger className="bg-blue-600 text-white hover:bg-blue-800 dark:text-white p-4 rounded-md flex gap-2">
        <GrNewWindow className="w-6 h-6" />
        Create Card
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 w-full">
              <FormInput
                form={form}
                name="number"
                type="number"
                placeholder="0000 0000 0000 0000"
                label="Card number:"
              />

              <FormInput
                form={form}
                name="cvv"
                placeholder="000"
                label="CVV:"
                type="number"
              />
              <FormInput
                form={form}
                name="flag"
                placeholder="Wang"
                label="Flag:"
              />
              <SelectCardType form={form} name="type" label="Type:" />
              <div className="flex justify-end gap-3">
                <DialogClose asChild>
                  <Button type="submit" variant={"secondary"}>
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-800 text-white"
                  >
                    Save
                  </Button>
                </DialogClose>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
