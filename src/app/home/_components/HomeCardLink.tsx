"use client";

import { ILinkEntity } from "@/components/shared/Bottombar/links";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface HomeCardLinkProps extends LinkProps {
  link: ILinkEntity;
}

export function HomeCardLink({ link, ...rest }: HomeCardLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname.includes(link.href) ||
    pathname === rest.as ||
    pathname.startsWith(String(rest.as));
  return (
    <>
      <Link
        href={link.href}
        className={
          isActive
            ? "md:min-w-60 shadow-lg flex flex-col items-center gap-3 p-3 bg-blue-600 text-zinc-100 dark:bg-neutral-900 rounded-md dark:hover:bg-neutral-800 hover:bg-zinc-100 hover:text-black cursor-pointer"
            : "md:min-w-60 shadow-lg flex flex-col items-center gap-3 p-3 dark:bg-neutral-900 rounded-md dark:hover:bg-neutral-800 hover:bg-zinc-100 cursor-pointer"
        }
      >
        {link.icon !== undefined && (
          <link.icon
            className={
              isActive
                ? "text-white-600 size-8"
                : "text-blue-600 hover:text-blue-800 size-8 "
            }
          />
        )}
        <p
          className={
            isActive
              ? "font-semibold text-base text-zinc-100 hidden md:block"
              : "font-semibold text-base text-neutral-950 dark:text-zinc-100 hidden md:block"
          }
        >
          {link.label}
        </p>
      </Link>
    </>
  );
}
