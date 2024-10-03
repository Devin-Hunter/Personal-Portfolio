import Grid from "@/components/Grid";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center
    items-center flex-col overflow-hidden mx-auto  ">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
