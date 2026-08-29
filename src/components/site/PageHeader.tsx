import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="fade-up max-w-3xl">
          <p className="eyebrow text-muted-foreground">{eyebrow}</p>
          <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-bold">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              {lead}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export function Section({
  title,
  lead,
  children,
  tone = "light",
}: {
  title?: string;
  lead?: string;
  children?: ReactNode;
  tone?: "light" | "ink";
}) {
  return (
    <section className={tone === "ink" ? "bg-ink text-ink-foreground" : "bg-background"}>
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
        {title && (
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold">{title}</h2>
        )}
        {lead && (
          <p
            className={`mt-4 max-w-2xl text-[16px] leading-relaxed ${
              tone === "ink" ? "text-ink-muted" : "text-muted-foreground"
            }`}
          >
            {lead}
          </p>
        )}
        {children && <div className={title || lead ? "mt-10" : ""}>{children}</div>}
      </div>
    </section>
  );
}

export function CapabilityGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="bg-card px-6 py-5 text-[15px] font-medium">
          {item}
        </li>
      ))}
    </ul>
  );
}
