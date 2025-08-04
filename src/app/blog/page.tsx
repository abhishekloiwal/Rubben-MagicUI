import Link from "next/link";
import { Icons } from "@/components/icons";

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-secondary/20 rounded-full blur-lg" />
            <div className="relative bg-background border border-border rounded-full p-6">
              <svg
                className="w-16 h-16 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter">
            Blog Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            We're working on bringing you insights, best practices, and the latest updates
            in investor relations and fundraising.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 justify-center">
          <Link
            href="/"
            className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
          >
            Back to Home
          </Link>
          <Link
            href="#"
            className="h-10 flex items-center justify-center px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
          >
            Subscribe for Updates
          </Link>
        </div>

        {/* Bottom text */}
        <p className="text-sm text-muted-foreground">
          In the meantime, explore our{" "}
          <Link href="/#features" className="text-secondary hover:underline">
            features
          </Link>{" "}
          or{" "}
          <Link href="/#pricing" className="text-secondary hover:underline">
            pricing
          </Link>
          .
        </p>
      </div>
    </main>
  );
}