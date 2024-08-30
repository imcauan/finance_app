import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface SelectCardTypeProps<T extends FieldValues>
  extends Omit<React.ComponentProps<"select">, "form"> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
}

export function SelectCardType<T extends FieldValues>({
  form,
  name,
  label,
  ...props
}: SelectCardTypeProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-zinc-200 font-medium text-base">
            {label}
          </FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Credit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={`${1}`}>Debit</SelectItem>
                  <SelectItem value={`${2}`}>Credit</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
