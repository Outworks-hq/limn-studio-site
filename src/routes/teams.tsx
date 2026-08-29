import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "For Teams — LIMN Studio" },
      {
        name: "description",
        content:
          "Shared projects, contributors, roles, approvals and production history across everyone who worked on a LIMN project.",
      },
      { property: "og:title", content: "For Teams — LIMN Studio" },
      {
        property: "og:description",
        content: "Collaborate in LIMN with contributors, roles, approvals and shared history.",
      },
    ],
  }),
  component: TeamsPage,
});

const items = [
  ["Shared projects", "Studios and teams work in the same LIMN projects, with material linked across applications."],
  ["Contributors", "Each contributor is identified in the project, so the record reflects who did the work."],
  ["Roles", "Assign what each contributor can open, edit, review or finalize."],
  ["Approvals", "Review steps are recorded as part of the project's history rather than tracked separately."],
  ["Collaboration", "Versions, linked assets and revisions stay connected through LIMN Cloud."],
  ["History across contributors", "A completed work carries the combined production history of everyone involved."],
];

function TeamsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Teams"
        title={
          <>
            Many contributors.
            <br />
            One production{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
              record.
            </span>
          </>
        }
        lead="LIMN is built for studios, agencies, publishers and production teams where several people contribute to the same work."
      />
      <Section>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">
          {items.map(([title, body]) => (
            <li key={title} className="bg-card p-8">
              <h2 className="text-[17px] font-semibold">{title}</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="ink" title="Team availability" lead="Plans and availability coming soon." />
    </>
  );
}
