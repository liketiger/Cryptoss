import LiveTradingChart from "@/widgets/ticker-detail/components/live-trading-chart";
import TickerDetailHeader from "@/widgets/ticker-detail/components/ticker-detail-header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ticker-details/$detailId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { detailId } = Route.useParams();
  console.log(detailId);
  return (
    <div className="pt-4 col gap-4">
      <header>
        <TickerDetailHeader />
      </header>
      <main>
        <LiveTradingChart />
      </main>
    </div>
  );
}
