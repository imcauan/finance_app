import { GrNewWindow } from "react-icons/gr";
import { Button } from "@/components/ui/button";

export function CreateCardButton() {
  return (
    <>
      <Button className="bg-blue-600 text-white hover:bg-blue-800 dark:text-white p-4 rounded-md">
        <GrNewWindow className="w-6 h-6" />
        <span className="ml-2">Create Card</span>
      </Button>
    </>
  );
}
