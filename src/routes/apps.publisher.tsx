import { createFileRoute } from "@tanstack/react-router";
import { AppPage, appHead } from "@/components/site/AppPage";

export const Route = createFileRoute("/apps/publisher")({
  head: () => appHead("publisher"),
  component: () => <AppPage id="publisher" />,
});
