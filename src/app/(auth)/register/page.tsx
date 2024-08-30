import React from "react";
import { SignUpForm } from "../_components/SignUpForm";

export default function Page() {
  return (
    <div className="flex flex-col w-full lg:w-1/2 h-full items-center">
      <img src="/wang-logo.png.png" />
      <h1 className="font-semibold text-xl dark:text-neutral-200">
        Welcome to Wang!
      </h1>
      <p className="text-neutral-400">
        Create an account and check our features.
      </p>
      <div className="flex flex-col w-full p-4 gap-4 items-center">
        <SignUpForm />
      </div>
    </div>
  );
}
