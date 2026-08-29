import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — LIMN Studio" },
      {
        name: "description",
        content: "How LIMN Studio handles account information and project creation records.",
      },
      { property: "og:title", content: "Privacy — LIMN Studio" },
      { property: "og:description", content: "LIMN Studio privacy information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy"
        lead="Full privacy documentation will be published here."
      />
      <Section title="Creation records">
        <p className="max-w-3xl text-[15.5px] leading-relaxed text-muted-foreground">
          Production history is recorded for work created inside the LIMN environment: contributors,
          applications, actions, revisions and approvals within the project. LIMN does not monitor
          activity outside its applications.
        </p>
      </Section>
    </>
  );
}
