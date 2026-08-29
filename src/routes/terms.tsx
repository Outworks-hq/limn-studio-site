import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — LIMN Studio" },
      {
        name: "description",
        content: "Terms of use for LIMN Studio applications and LIMN Cloud.",
      },
      { property: "og:title", content: "Terms — LIMN Studio" },
      { property: "og:description", content: "LIMN Studio terms of use." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Terms"
        lead="Full terms of use will be published here."
      />
      <Section title="Your work">
        <p className="max-w-3xl text-[15.5px] leading-relaxed text-muted-foreground">
          Work created in LIMN applications belongs to the creators who made it. The production
          history recorded in a .limn project exists to support that work.
        </p>
      </Section>
    </>
  );
}
