import { CheckFlightStatusFilterCard } from "@/components/check-flight-search-card";
import { NavBar } from "@/components/nav/nav-bar";
import { PromotionBanner } from "@/components/promotion-banner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SlideList } from "@/lib/promotion-slide";

function DashboardPage() {
  return (
    <ScrollArea className="h-full w-full">
      <div className="flex h-full w-full justify-center bg-transparent px-4">
        <div className="mt-14 h-full w-full md:w-3/4">
          <div className="font-mono text-2xl text-primaryText">
            Check flight status
          </div>
          <div className="font-mono text-lg text-primaryText/50">
            Stay informed and in control! Track your flight{" "}
            <span className="text-highlight">instantly</span>.
          </div>
          <div className="mt-4 w-full rounded-2xl bg-background/45 p-6 shadow">
            <CheckFlightStatusFilterCard />
          </div>
          <div className="mt-16 font-sans text-base font-medium text-primaryText/60">
            What’s new?
          </div>
          <div className="font-mono text-xl text-primaryText">
            Find <span className="text-highlight">exclusive offers</span> and
            the best deals available for you.
          </div>
          <div className="mt-4 w-full rounded-2xl bg-background/45 p-6 shadow">
            <PromotionBanner slides={SlideList} />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default DashboardPage;
