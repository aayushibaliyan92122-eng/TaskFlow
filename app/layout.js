import Link from "next/link";



export const metadata = {
  title: "My Learning App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
           
            <Link href="/todospage">todospage</Link>
            <Link href="/dashboard">dashboard</Link>
            <Link href="/status">stats</Link>

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