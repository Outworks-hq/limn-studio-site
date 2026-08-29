import { createFileRoute } from "@tanstack/react-router";
import { AppPage, appHead } from "@/components/site/AppPage";

export const Route = createFileRoute("/apps/modelworks")({
  head: () => appHead("modelworks"),
  component: () => <AppPage id="modelworks" />,
});
