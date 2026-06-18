import Link from "next/link";
import "./global.css"
import { Button } from "@/components/ui/button";
import logoutUser from "../app/dashboard/page.js"


export const metadata = {
  title: "My Learning App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
<body className="bg-zinc-950 text-zinc-100">
        
        <header>
        <nav className="border-b border-zinc-800 bg-black/80 backdrop-blur sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    <Link
      href="/"
      className="text-xl font-bold text-white"
    >
      Home
    </Link>

    <div className="flex items-center gap-8">
      <Link
        href="/dashboard"
        className="text-zinc-400 hover:text-white transition-colors"
      >
        Dashboard
      </Link>

      <Link
        href="/todospage"
        className="text-zinc-400 hover:text-white transition-colors"
      >
        Todos
      </Link>
    </div>

   

  </div>
</nav>
          <div className="site-branding">
            
          </div>
        </header>

        <main className="page-wrapper">{children}</main>

        <footer>
          <hr />
          <h3>Consistency is more important than perfection.</h3>
        </footer>
      </body>
    </html>
  );
}