import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { apps } from "@/lib/apps";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "Applications — LIMN Studio" },
      {
        name: "description",
        content:
          "Five professional LIMN applications for image, film, sound, 3D and publishing, connected through one LIMN environment.",
      },
      { property: "og:title", content: "Applications — LIMN Studio" },
      {
        property: "og:description",
        content: "ImageLine, FilmWorks, SoundWorks, ModelWorks and Publisher.",
      },
    ],
  }),
  component: AppsPage,
});

function AppsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Applications"
        title={
          <>
            Five applications.
            <br />
            One connected{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
              environment.
            </span>
          </>
        }
        lead="Each LIMN application is a separate professional program. They share one account, one project format and one production history."
      />

      <Section>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
          {apps.map((app) => (
            <li key={app.id} className="bg-card p-8">
              <div className="flex items-start gap-5">
                <span
                  className={`grid h-[64px] w-[64px] shrink-0 place-items-center rounded-[14px] ${app.colorClass} text-ink-foreground`}
                >
                  <span className="h-8 w-8">{app.icon}</span>
                </span>
                <div className="min-w-0">
                  <p className="eyebrow text-muted-foreground">{app.purpose}</p>
                  <h2 className="mt-2 text-[22px] font-bold">LIMN {app.name}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {app.summary}
                  </p>
                  <Link
                    to={app.path}
                    className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium ${app.textClass} transition-transform hover:translate-x-0.5`}
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="ink"
        title="A workflow that keeps its history"
        lead="Project material moves between compatible LIMN applications without breaking the record of how it was made."
      >
        <ol className="grid gap-px overflow-hidden rounded-lg bg-ink-border sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["ImageLine", "Character artwork created"],
            ["ModelWorks", "Character modeled and rigged"],
            ["FilmWorks", "Character animated in a film"],
            ["SoundWorks", "Dialogue, music and sound created"],
            ["FilmWorks", "Final sequence assembled"],
          ].map(([app, step], i) => (
            <li key={i} className="bg-ink px-6 py-7">
              <p className="text-[13px] text-ink-muted">Step {i + 1}</p>
              <p className="mt-2 text-[16px] font-semibold">{app}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-ink-muted">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
