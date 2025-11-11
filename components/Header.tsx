// Server Component
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">
              CP
            </span>
          </div>
          <span className="font-bold text-lg">
            Competitive Programming Club
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/problems"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Problems
          </Link>
          <Link
            href="/contests"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contests
          </Link>
          <Link
            href="/resources"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
}
