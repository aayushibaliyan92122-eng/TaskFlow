"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { logoutUser } from "@/app/lib/logout";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Home
        </Link>

        <nav className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link href="/todospage">Todos</Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => logoutUser(router)}
          >
            Logout
          </Button>
        </nav>

      </div>
    </header>
  );
}