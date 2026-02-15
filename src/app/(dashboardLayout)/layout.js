import Sidebar from "@/components/Dashboard/Common/Sidebar/Sidebar";

const CommonDashboardLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar Component */}
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="min-h-screen w-full bg-[#fefcff]  dark:bg-black relative">
          <div
            className="absolute inset-0 z-0 dark:hidden"
            style={{
              backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
            }}
          />
          {/* dark bg */}
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
       radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
       radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
       radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
       radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
       #000000
     `,
            }}
          />

          <div className="relative z-50">{children}</div>
          {/* Outlet for dynamic contents */}
        </div>
      </div>
    </div>
  );
};

export default CommonDashboardLayout;
