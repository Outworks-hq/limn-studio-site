import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/verification")({
  head: () => ({
    meta: [
      { title: "Verification — LIMN Studio" },
      {
        name: "description",
        content:
          "LIMN records the creation process rather than guessing authorship from final pixels or audio. See how the production record is formed.",
      },
      { property: "og:title", content: "Verification — LIMN Studio" },
      {
        property: "og:description",
        content: "How LIMN records and verifies the production process behind a finished work.",
      },
    ],
  }),
  component: VerificationPage,
});

const flow = [
  ["Creator", "The identified person doing the work."],
  ["Tool", "The LIMN application in use."],
  ["Action", "The meaningful step taken."],
  ["Asset", "The material created or brought in."],
  ["Revision", "The change recorded on the project."],
  ["Approval", "The review step accepted."],
  ["Final Work", "The finished piece with its history."],
];

function VerificationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Verification"
        title={
          <>
            Where is the creation{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
              history?
            </span>
          </>
        }
        lead="LIMN records the creation process while work is being made inside the LIMN environment, rather than attempting to guess authorship from final pixels or audio."
      />

      <Section title="The production record">
        <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
          {flow.map(([step, note], i) => (
            <li key={step} className="flex items-baseline gap-6 bg-card px-7 py-6">
              <span className="w-6 shrink-0 text-[13px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-[18px] font-semibold">{step}</p>
                <p className="mt-1 text-[14.5px] text-muted-foreground">{note}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="ink" title="Two different questions">
        <div className="grid gap-px overflow-hidden rounded-lg bg-ink-border lg:grid-cols-2">
          <div className="bg-ink p-8">
            <p className="eyebrow text-ink-muted">Traditional AI detection asks</p>
            <p className="mt-4 text-[20px] font-semibold">
              “Does this finished file look AI-generated?”
            </p>
          </div>
          <div className="bg-ink p-8">
            <p className="eyebrow text-ink-muted">LIMN asks</p>
            <p className="mt-4 text-[20px] font-semibold">
              “Where is the creation history that produced this work?”
            </p>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-ink-muted">
          LIMN verifies the production process by recording creation inside its own software
          ecosystem. Creation events, contributor identities and timestamps are held in the .limn
          project, and exported files can reference a signed provenance credential pointing back to
          it.
        </p>
      </Section>
    </>
  );
}
