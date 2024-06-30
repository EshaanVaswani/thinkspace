import Navbar from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="h-full dark:bg-[#191919]">
         <Navbar />
         <main className="h-full pt-40">{children}</main>
      </div>
   );
};

export default LandingLayout;
