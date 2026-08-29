import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDownToLine, Play, ShieldCheck, Apple, Monitor, Cloud, X } from "lucide-react";
import { AppBar } from "@/components/site/AppBar";
import heroDisplay from "@/assets/hero-imageline.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIMN Studio — Creative software. Proven by history." },
      {
        name: "description",
        content:
          "LIMN Studio is a connected suite of professional apps for image, film, sound, 3D, and publishing, with verified production history built into the creation process.",
      },
      { property: "og:title", content: "LIMN Studio — Creative software. Proven by history." },
      {
        property: "og:description",
        content:
          "A connected suite of professional creative applications with verifiable human production history.",
      },
    ],
  }),
  component: Home,
});

function OverviewModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-ink/85 px-5"
      role="dialog"
      aria-modal="true"
      aria-label="LIMN Studio Overview"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-ink text-ink-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink-border px-6 py-4">
          <p className="eyebrow text-ink-muted">LIMN Studio Overview</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close overview"
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-border"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="grid aspect-video place-items-center border-b border-ink-border">
          <p className="px-6 text-center text-[clamp(1.1rem,2.5vw,1.6rem)] font-semibold">
            LIMN Studio Overview — Coming Soon.
          </p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [overview, setOverview] = useState(false);

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:py-20">
          <div className="fade-up">
            <p className="eyebrow text-foreground/70">LIMN Studio</p>
            <h1 className="mt-6 text-[clamp(2.5rem,6.2vw,4.25rem)] leading-[1.03] font-bold">
              Creative software.
              <br />
              Proven by{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
                history.
              </span>
            </h1>
            <p className="mt-7 max-w-[30ch] text-[17px] leading-relaxed text-muted-foreground">
              LIMN Studio is a connected suite of professional apps for image, film, sound, 3D, and
              publishing. Every meaningful creation step can become part of the project's verified
              production history.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                to="/apps"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-85"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Explore Apps
              </Link>
              <button
                type="button"
                onClick={() => setOverview(true)}
                className="group inline-flex items-center gap-3.5 text-[15px] font-medium"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-foreground/25 transition-colors group-hover:bg-accent">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Watch Overview
              </button>
            </div>

            <div className="mt-14 flex items-start gap-3.5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.6} />
              <div>
                <p className="eyebrow">Verified creation history built in</p>
                <p className="mt-1.5 text-[14px] text-muted-foreground">
                  Your work. Your proof. Your signature.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-up">
            <img
              src={heroDisplay}
              width={1600}
              height={1200}
              alt="LIMN ImageLine photo editing interface shown on a professional display"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <AppBar />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.7fr)_auto] lg:items-center lg:gap-12">
          <div className="flex items-start gap-6">
            <span className="grid h-[74px] w-[74px] shrink-0 place-items-center rounded-2xl bg-accent">
              <LockGlyph />
            </span>
            <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.12] font-bold whitespace-nowrap">
              Built for creators.
              <br />
              Backed by proof.
            </h2>
          </div>

          <p className="max-w-[42ch] text-[15px] leading-relaxed text-muted-foreground">
            LIMN records the creative production process so work can retain a verifiable history
            connected to its creation.
          </p>

          <div>
            <div className="flex flex-wrap gap-4">
              <PlatformCard icon={<Apple className="h-5 w-5" />} title="macOS" note="Apple Silicon & Intel" />
              <PlatformCard icon={<Monitor className="h-5 w-5" />} title="Windows" note="10 / 11 (64-bit)" />
              <Link to="/cloud" className="contents">
                <PlatformCard
                  icon={<Cloud className="h-5 w-5" />}
                  title="LIMN Cloud"
                  note="Access anywhere"
                />
              </Link>
            </div>
            <p className="mt-6 text-center text-[13px] text-muted-foreground lg:text-left">
              Plans and availability coming soon
            </p>
          </div>
        </div>
      </section>

      {overview && <OverviewModal onClose={() => setOverview(false)} />}
    </>
  );
}

function PlatformCard({
  icon,
  title,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  note: string;
}) {
  return (
    <div className="flex items-center gap-3.5 rounded-full bg-card px-6 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-0.5">
      {icon}
      <div>
        <p className="text-[14.5px] font-semibold">{title}</p>
        <p className="text-[11.5px] text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

function LockGlyph() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8" fill="currentColor">
      <path d="M16 3a6 6 0 0 0-6 6v3H8v17h16V12h-2V9a6 6 0 0 0-6-6zm0 3a3 3 0 0 1 3 3v3h-6V9a3 3 0 0 1 3-3z" />
    </svg>
  );
}
