import { Links } from "@/components/shared/Bottombar/links";
import { HomeCardLink } from "./HomeCardLink";

export function LinksBar() {
  return (
    <div className="w-full grid grid-cols-4 place-items-center md:p-6 gap-4">
      {Links.map((link) => (
        <HomeCardLink href={link.href} key={link.label} link={link} />
      ))}
    </div>
  );
}
