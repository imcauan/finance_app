import { Input } from "@/components/ui/input";
import { SignInForm } from "../_components/SignInForm";

export default function Page() {
  return (
    <div className="flex flex-col w-full lg:w-1/2 h-full items-center">
      <img src="/wang-logo.png.png" />
      <h1 className="font-semibold text-xl dark:text-neutral-200">
        Welcome back!
      </h1>
      <p className="text-neutral-400">Please, login to access our app.</p>
      <div className="flex flex-col w-full p-4 gap-4 items-center">
        <SignInForm />
      </div>
    </div>
  );
}
