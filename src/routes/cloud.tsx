import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, CapabilityGrid } from "@/components/site/PageHeader";

export const Route = createFileRoute("/cloud")({
  head: () => ({
    meta: [
      { title: "LIMN Cloud — Project storage, sync and verification" },
      {
        name: "description",
        content:
          "LIMN Cloud is the connected project storage, syncing, collaboration and verification infrastructure for LIMN Studio.",
      },
      { property: "og:title", content: "LIMN Cloud" },
      {
        property: "og:description",
        content: "Storage, sync, history and verification records connecting the LIMN ecosystem.",
      },
    ],
  }),
  component: CloudPage,
});

function CloudPage() {
  return (
    <>
      <PageHeader
        eyebrow="LIMN Cloud"
        title={
          <>
            The infrastructure behind the{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
              ecosystem.
            </span>
          </>
        }
        lead="LIMN Cloud connects projects, contributors and verification records across the LIMN applications. It is infrastructure, not a sixth creative application."
      />
      <Section title="What LIMN Cloud supports">
        <CapabilityGrid
          items={[
            "Cloud project storage",
            "Syncing between supported computers",
            "Project history",
            "Version history",
            "Team collaboration",
            "Linked assets",
            "Verification records",
            "Access from different supported devices",
          ]}
        />
      </Section>
      <Section
        tone="ink"
        title="One account across the suite"
        lead="A creator signs in once and can move project material between compatible LIMN applications while the project history stays connected."
      />
    </>
  );
}
