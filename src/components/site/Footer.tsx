import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";

const links = [
  { label: "Apps", to: "/apps" },
  { label: "Pricing", to: "/pricing" },
  { label: "Learn", to: "/learn" },
  { label: "Company", to: "/company" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Contact", to: "/contact" },
] as const;

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L22.6 22h-6.3l-4.9-6.4L5.6 22H2.5l7.2-8.2L1.8 2h6.4l4.6 6 5-6z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[240px_1fr_auto] lg:items-start">
        <div>
          <p className="text-[15px]">LIMN Studio</p>
          <p className="mt-2 text-[13px] text-ink-muted">
            © 2026 LIMN Studio. All rights reserved.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-9 gap-y-4 lg:justify-center"
          aria-label="Footer"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[14px] text-ink-foreground/85 transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2.5">
          {[
            { label: "X", node: <XIcon /> },
            { label: "Instagram", node: <Instagram className="h-3.5 w-3.5" /> },
            { label: "YouTube", node: <Youtube className="h-3.5 w-3.5" /> },
            { label: "Facebook", node: <Facebook className="h-3.5 w-3.5" /> },
          ].map((s) => (
            <span
              key={s.label}
              aria-label={s.label}
              role="img"
              className="grid h-8 w-8 place-items-center rounded-full border border-ink-border text-ink-foreground/80"
            >
              {s.node}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
