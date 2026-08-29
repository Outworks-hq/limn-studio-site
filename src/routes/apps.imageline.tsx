import { createFileRoute } from "@tanstack/react-router";
import { AppPage, appHead } from "@/components/site/AppPage";

export const Route = createFileRoute("/apps/imageline")({
  head: () => appHead("imageline"),
  component: () => <AppPage id="imageline" />,
});
