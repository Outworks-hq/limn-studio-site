import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — LIMN Studio" },
      {
        name: "description",
        content:
          "Support for LIMN Studio: getting started, applications, LIMN Cloud, projects, verification, account and contact.",
      },
      { property: "og:title", content: "Support — LIMN Studio" },
      { property: "og:description", content: "Help with LIMN applications, Cloud and projects." },
    ],
  }),
  component: SupportPage,
});

const topics = [
  ["Getting Started", "Installing LIMN, signing in and opening your first project.", "/learn"],
  ["Applications", "Help for ImageLine, FilmWorks, SoundWorks, ModelWorks and Publisher.", "/apps"],
  ["LIMN Cloud", "Storage, syncing and access across supported computers.", "/cloud"],
  ["Projects", "Working with .limn projects, revisions and exports.", "/learn"],
  ["Verification", "How production history is recorded and verified.", "/verification"],
  ["Account", "Sign-in, identity and contributor details.", "/login"],
  ["Contact Support", "Reach the LIMN Studio support team.", "/contact"],
] as const;

function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="How can we help?"
        lead="Guidance for LIMN Studio applications, projects and verification."
      />
      <Section>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">
          {topics.map(([title, note, to]) => (
            <li key={title}>
              <Link to={to} className="block h-full bg-card p-8 transition-colors hover:bg-accent">
                <h2 className="text-[18px] font-semibold">{title}</h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{note}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
