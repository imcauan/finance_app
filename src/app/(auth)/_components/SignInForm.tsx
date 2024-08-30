"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useQuery } from "@tanstack/react-query";
import { FormInput } from "@/components/shared/FormInput";
import { useAuthContext } from "@/hooks/useAuthContext";

const formSchema = z.object({
  email: z.string().email({ message: "Email must be valid." }),
  password: z
    .string()
    .max(100, { message: "Password cannot be bigger than 100 char." }),
});

export function SignInForm() {
  const { login } = useAuthContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await login(data.email, data.password);
  }

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput
            form={form}
            name="email"
            placeholder="johndoe@email.com"
            label="Email:"
          />
          <FormInput
            form={form}
            name="password"
            type="password"
            placeholder="Your password"
            label="Password:"
          />
          <div className="flex flex-col w-full items-center gap-3">
            <Button
              className="bg-blue-600 text-zinc-200 hover:bg-blue-800 font-bold mt-5 w-60"
              type="submit"
            >
              LOGIN
            </Button>
            <Link
              href={"/register"}
              className="text-zinc-600 font-semibold text-md"
            >
              Don't you have an account?{" "}
              <span className="text-blue-600 font-semibold">Register.</span>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
