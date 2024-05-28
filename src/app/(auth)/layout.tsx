"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../app/style.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Password Reset", href: "/password_reset" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-400 mr-3"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
      you are currently in {pathname}
    </div>
  );
}
