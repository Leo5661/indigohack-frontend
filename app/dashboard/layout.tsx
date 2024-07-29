import { NavBar } from "@/components/nav/nav-bar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center border border-green-700">
      <NavBar />
      {children}
    </div>
  );
}

export default DashboardLayout;
