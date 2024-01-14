import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./../components/navigation";
import Footer from "./../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://wordle.tylerlatshaw.com/"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Tyler Latshaw",
    default: "Wordle Word Analyzer | Tyler Latshaw",
  },
  description: "Tyler Latshaw is a professionally-certified Scrum Master with years of experience in project management, web design, leadership, and mentoring.",
  generator: "Next.js",
  applicationName: "Next.js",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Tyler Latshaw", url: "https://tylerlatshaw.com/" }],
  creator: "Tyler J. Latshaw",
  publisher: "Tyler J. Latshaw",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="leading-normal tracking-normal bg-cover bg-fixed min-h-screen" suppressHydrationWarning={true}>
        <main>
          <Navigation />
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html >
  );
}