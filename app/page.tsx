import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Experiences from "@/components/experiences";
import Flagship from "@/components/flagship";
import Dreamlist from "@/components/dreamlist";
import Mystery from "@/components/mystery";
import KolkataMap from "@/components/map";
import Timeline from "@/components/timeline";
import Journal from "@/components/journal";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experiences />
        <Flagship />
        <Dreamlist />
        <Mystery />
        <KolkataMap />
        <Timeline />
        <Journal />
        <Marquee className="bg-coral text-ink" rotate="rotate-1" />
      </main>
      <Footer />
    </>
  );
}
