import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card,CardContent } from '@/components/ui/card';


export default function Home() {
  return (


<>


  <main className="min-h-[80vh] flex flex-col items-center justify-center text-center">

  <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400 mb-6">
    🚀 Modern Task Management App
  </div>

  <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight">
    Manage Tasks
    <span className="text-blue-500"> Without Chaos</span>
  </h1>

  <p className="mt-6 max-w-2xl text-lg text-zinc-400">
    Stay productive with secure authentication,
    personal workspaces and a modern dashboard built
    with Next.js and Prisma.
  </p>

  <div className="mt-10 flex gap-4">
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
  


<section className="max-w-6xl mx-auto py-20">

  <h2 className="text-center text-4xl font-bold mb-12">
    Everything You Need
  </h2>

  <div className="grid gap-6 md:grid-cols-3">

    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl">
          🔐 Secure Authentication
        </h3>

        <p className="mt-3 text-zinc-400">
          JWT authentication with protected routes.
        </p>
      </CardContent>
    </Card>

    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl">
          📋 Personal Workspace
        </h3>

        <p className="mt-3 text-zinc-400">
          Every user manages their own tasks.
        </p>
      </CardContent>
    </Card>

    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl">
          ⚡ Fast & Modern
        </h3>

        <p className="mt-3 text-zinc-400">
          Built with Next.js, Prisma and Neon.
        </p>
      </CardContent>
    </Card>

  </div>

</section>


<section className="max-w-6xl mx-auto py-16">

  <div className="grid md:grid-cols-3 gap-6">

    <div className="text-center">
      <h3 className="text-5xl font-bold text-blue-500">
        JWT
      </h3>
      <p className="text-zinc-400">
        Authentication
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-5xl font-bold text-blue-500">
        CRUD
      </h3>
      <p className="text-zinc-400">
        Task Management
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-5xl font-bold text-blue-500">
        100%
      </h3>
      <p className="text-zinc-400">
        User Owned Data
      </p>
    </div>

  </div>

</section>


<footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
  ~ Aayushhi Baliyan
</footer>

</>
  );
}