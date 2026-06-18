import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button";



export default function Home() {
  return (





    <main className="min-h-screen bg-black text-white">


      


    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold tracking-tight">
        Organize Your Life
      </h1>

      <p className="mt-6 max-w-xl text-zinc-400 text-lg">
        A simple productivity app built with Next.js,
        Prisma, Neon and JWT Authentication.
      </p>

      <div className="flex gap-4 mt-8">
        <Link href="/auth/signUp">
          <Button size="lg">
            Get Started
          </Button>
        </Link>

        <Link href="/auth/login">
          <Button variant="outline" size="lg">
            Login
          </Button>
        </Link>
      </div>
    </main>
  


<section className="mx-auto max-w-6xl px-6 py-24">

  <h2 className="mb-12 text-center text-4xl font-bold">
    Features
  </h2>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">
        Secure Authentication
      </h3>

      <p className="mt-3 text-zinc-400">
        JWT authentication with protected routes.
      </p>
    </div>

    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">
        Personal Workspace
      </h3>

      <p className="mt-3 text-zinc-400">
        Every user sees only their own todos.
      </p>
    </div>

    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">
        Fast & Modern
      </h3>

      <p className="mt-3 text-zinc-400">
        Built with Next.js, Prisma and Neon.
      </p>
    </div>

  </div>

</section>


<footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
  Built by Aayushi Baliyan using Next.js & Prisma
</footer>
    </main>
  );
}