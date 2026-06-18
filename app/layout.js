
import Link from "next/link";
import "./global.css";
import { CheckSquare } from "lucide-react";
import Navbar from "./components/Navbar";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "TaskFlow",
  description: "Modern task management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        
       
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            
           

            
            
              <Link
  href="/"
  className="flex items-center gap-2 text-xl font-bold tracking-tight"
>
  <CheckSquare className="h-5 w-5 text-blue-500" />
  TaskFlow
</Link>


<Navbar/>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </main>

       <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
  © {new Date().getFullYear()} TaskFlow. Built with Next.js, Prisma & shadcn/ui.
</footer>

      </body>
    </html>
  );
}