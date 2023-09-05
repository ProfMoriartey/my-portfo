import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll font-bodyFont">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
