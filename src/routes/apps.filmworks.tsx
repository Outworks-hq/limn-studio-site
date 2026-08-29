import { createFileRoute } from "@tanstack/react-router";
import { AppPage, appHead } from "@/components/site/AppPage";

export const Route = createFileRoute("/apps/filmworks")({
  head: () => appHead("filmworks"),
  component: () => <AppPage id="filmworks" />,
});
