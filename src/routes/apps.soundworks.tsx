import { createFileRoute } from "@tanstack/react-router";
import { AppPage, appHead } from "@/components/site/AppPage";

export const Route = createFileRoute("/apps/soundworks")({
  head: () => appHead("soundworks"),
  component: () => <AppPage id="soundworks" />,
});
