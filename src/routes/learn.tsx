import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn — How LIMN Works" },
      {
        name: "description",
        content:
          "How LIMN records human production history, how verification works, what a .limn project contains, and how it differs from AI detection.",
      },
      { property: "og:title", content: "Learn — How LIMN Works" },
      {
        property: "og:description",
        content: "An overview of LIMN production history, verification and project files.",
      },
    ],
  }),
  component: LearnPage,
});

const sections = [
  {
    title: "What is LIMN?",
    body: "LIMN Studio is a connected suite of professional creative applications for image, film, sound, 3D and publishing. It is made for people producing human-created media, and it records how that work was made.",
  },
  {
    title: "Human production history",
    body: "As work is created inside LIMN, the environment can record meaningful creation information: creator, tool, action, asset, revision, approval and final work. Together these form a credible production history for the finished piece.",
  },
  {
    title: "How verification works",
    body: "Verification is based on the recorded creation process inside the LIMN environment, not on an after-the-fact analysis of a finished file. Creation events are timestamped and cryptographically signed as part of the project.",
  },
  {
    title: "Why LIMN is different from AI detection",
    body: "Traditional AI detection asks whether a finished file looks AI-generated. LIMN asks where the creation history that produced the work is. LIMN is not an AI detector; it records production inside its own software ecosystem.",
  },
  {
    title: ".limn project files",
    body: "A .limn project is the full LIMN creation package. It can hold project media, layers, timelines, keyframes, 3D assets, audio tracks, fonts and resources, revision history, contributor identities, timestamps, application and action history, creation events, cryptographic verification information, verification status, and links between LIMN applications. Example: MilesAway.limn",
  },
  {
    title: "Traditional exports",
    body: "LIMN projects export conventional formats such as PNG, JPG, MP4, MOV, WAV, MP3 and PDF. An export can carry or reference a signed LIMN provenance credential connecting it back to the verified project it came from. The original .limn project holds the deeper production history.",
  },
  {
    title: "Connected applications",
    body: "One LIMN account works across all five applications. Project material can move between compatible applications while preserving the relationships between the pieces of work.",
  },
];

function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title={
          <>
            Professional software with a recorded{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
              process.
            </span>
          </>
        }
        lead="An overview of how LIMN works, what it records, and what it does not claim."
      />
      <Section>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
          {sections.map((s) => (
            <article key={s.title} className="bg-card p-8 lg:grid lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-10">
              <h2 className="text-[19px] font-semibold">{s.title}</h2>
              <p className="mt-3 max-w-3xl text-[15.5px] leading-relaxed text-muted-foreground lg:mt-0">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
