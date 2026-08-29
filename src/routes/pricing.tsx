import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { apps } from "@/lib/apps";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — LIMN Studio" },
      {
        name: "description",
        content: "Pricing information for LIMN Studio applications and LIMN Cloud is coming soon.",
      },
      { property: "og:title", content: "Pricing — LIMN Studio" },
      { property: "og:description", content: "Pricing information coming soon." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Pricing information coming soon."
        lead="Plans for individual applications, the full LIMN Studio suite, LIMN Cloud and teams will be published here."
      />
      <Section title="What will be listed">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">
          {[
            ["Single application", "Individual LIMN applications."],
            ["LIMN Studio", "The complete connected suite."],
            ["Teams", "Shared projects and contributors."],
          ].map(([title, note]) => (
            <div key={title} className="bg-card p-8">
              <h2 className="text-[19px] font-semibold">{title}</h2>
              <p className="mt-2 text-[14.5px] text-muted-foreground">{note}</p>
              <p className="mt-8 text-[15px] font-medium">Pricing information coming soon.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="ink" title="Applications">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {apps.map((a) => (
            <li key={a.id}>
              <Link to={a.path} className="text-[15px] text-ink-muted hover:text-ink-foreground">
                LIMN {a.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
