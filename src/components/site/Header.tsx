import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Apps", to: "/apps" },
  { label: "For Teams", to: "/teams" },
  { label: "Learn", to: "/learn" },
  { label: "Pricing", to: "/pricing" },
  { label: "Support", to: "/support" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="text-[26px] leading-none font-light tracking-[0.16em]">LIMN</span>
          <span className="text-[15px] leading-none text-ink-muted">Studio</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[14px] text-ink-foreground/85 transition-colors hover:text-ink-foreground"
              activeProps={{ className: "text-ink-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="rounded-full bg-ink-foreground px-7 py-2.5 text-[14px] font-medium text-ink transition-opacity hover:opacity-85"
          >
            Log In
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-border lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-3 sm:px-8" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-ink-border py-4 text-[15px]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-5 mb-3 rounded-full bg-ink-foreground px-6 py-3 text-center text-[15px] font-medium text-ink"
            >
              Log In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
