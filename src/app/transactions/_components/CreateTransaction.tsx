"use client";

import { FormInput } from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { z } from "zod";
import { useCreateTransaction } from "@/hooks/transaction/create-transaction";
import { useAuthContext } from "@/hooks/useAuthContext";

const formSchema = z.object({
  to: z.string().min(1, { message: "Recipient cannot be empty!" }),
  value: z.coerce.number().min(1, { message: "Value cannot be empty!" }),
});

export function CreateTransaction() {
  const { user } = useAuthContext();
  const { mutate: CreateTransactionFn } = useCreateTransaction();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "",
      value: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    CreateTransactionFn({
      from: user?.id ?? "",
      ...data,
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-blue-600 text-white hover:bg-blue-800 dark:text-white p-4 rounded-md flex gap-2">
        <FaPlus className="size-5" />
        New Transaction
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Create a Transaction</DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormInput
              form={form}
              name="to"
              placeholder="johndoe@email.com"
              label="To:"
            />
            <FormInput
              form={form}
              name="value"
              placeholder="0.00"
              label="Value:"
            />
            <div className="w-full flex justify-end gap-2">
              <DialogClose>
                <Button variant={"secondary"}>Cancel</Button>
              </DialogClose>
              <DialogClose>
                <Button className="bg-blue-600 text-white" type="submit">
                  Create
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
