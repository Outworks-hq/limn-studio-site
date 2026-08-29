import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — LIMN Studio" },
      {
        name: "description",
        content:
          "LIMN Studio builds professional creative software for people producing human-created media.",
      },
      { property: "og:title", content: "Company — LIMN Studio" },
      {
        property: "og:description",
        content: "About LIMN Studio and the work it is built for.",
      },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="LIMN Studio"
        lead="LIMN Studio builds professional creative applications for image, film, sound, 3D and publishing, with verifiable human production history recorded as work is made."
      />
      <Section title="What we make">
        <p className="max-w-3xl text-[15.5px] leading-relaxed text-muted-foreground">
          Five separate professional applications operate through one connected LIMN environment:
          ImageLine, FilmWorks, SoundWorks, ModelWorks and Publisher. LIMN Cloud connects projects,
          contributors and verification records across them. LIMN is pronounced “lim.”
        </p>
      </Section>
    </>
  );
}
