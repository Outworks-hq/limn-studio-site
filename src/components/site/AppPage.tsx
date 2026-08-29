import { Link } from "@tanstack/react-router";
import { CapabilityGrid, PageHeader, Section } from "@/components/site/PageHeader";
import { getApp, type AppId } from "@/lib/apps";

export function AppPage({ id }: { id: AppId }) {
  const app = getApp(id);

  return (
    <>
      <PageHeader
        eyebrow={app.purpose}
        title={
          <>
            LIMN {app.name}
          </>
        }
        lead={app.summary}
      >
        <div className="mt-9 flex items-center gap-5">
          <span
            className={`grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[16px] ${app.colorClass} text-ink-foreground`}
          >
            <span className="h-10 w-10">{app.icon}</span>
          </span>
          <p className="text-[15px] font-medium">{app.short}</p>
        </div>
      </PageHeader>

      <Section
        title="Capabilities"
        lead={`What creators work with inside ${app.name}.`}
      >
        <CapabilityGrid items={app.capabilities} />
      </Section>

      <Section tone="ink" title="Production history included">
        <p className="max-w-2xl text-[16px] leading-relaxed text-ink-muted">
          Work created in {app.name} carries its LIMN project history: contributors, tools, actions,
          revisions and approvals recorded as the work is made. Projects can move to other LIMN
          applications and keep that history intact.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/verification"
            className="rounded-full bg-ink-foreground px-6 py-3 text-[14.5px] font-medium text-ink transition-opacity hover:opacity-85"
          >
            How verification works
          </Link>
          <Link
            to="/apps"
            className="rounded-full border border-ink-border px-6 py-3 text-[14.5px] font-medium transition-colors hover:bg-ink-foreground/10"
          >
            All applications
          </Link>
        </div>
      </Section>
    </>
  );
}

export function appHead(id: AppId) {
  const app = getApp(id);
  const title = `LIMN ${app.name} — ${app.short.replace(/\.$/, "")}`;
  return {
    meta: [
      { title: `${title} | LIMN Studio` },
      { name: "description", content: app.summary },
      { property: "og:title", content: title },
      { property: "og:description", content: app.summary },
    ],
  };
}
