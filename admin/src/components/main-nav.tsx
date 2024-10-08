"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.hotelId}`,
      label: "Dashboard",
      active: pathname === `/${params.hotelId}`,
    },
    {
      href: `/${params.hotelId}/banners`,
      label: "Banners",
      active: pathname === `/${params.hotelId}/banners`,
    },
    {
      href: `/${params.hotelId}/categories`,
      label: "Categories",
      active: pathname === `/${params.hotelId}/categories`,
    },
    {
      href: `/${params.hotelId}/products`,
      label: "Lodging Place",
      active: pathname === `/${params.hotelId}/products`,
    },
    {
      href: `/${params.hotelId}/settings`,
      label: "Settings",
      active: pathname === `/${params.hotelId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
