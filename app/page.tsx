import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import FeaturedEvent from "@/components/featured-event";
import UpcomingEvents from "@/components/upcoming-events";
import KolkataSection from "@/components/kolkata-section";
import Categories from "@/components/categories";
import Venues from "@/components/venues";
import About from "@/components/about";
import Dreamlist from "@/components/dreamlist";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* 1. NAVBAR */}
      <Navbar />

      <main>
        {/* 2. HERO: "KOLKATA IS HAPPENING" */}
        <Hero />

        {/* 3. MARQUEE: MUSIC • THEATRE • COMEDY • ART • CULTURE • KOLKATA • */}
        <Marquee theme="sun" />

        {/* 4. FEATURED EVENT: Headliner Poster Composition */}
        <FeaturedEvent />

        {/* 5. UPCOMING EVENTS: Varied Editorial Rows & Cultural Calendar Entries */}
        <UpcomingEvents />

        {/* 6. KOLKATA SECTION: Event Culture across Park Street, Rabindra Sadan, College Street, etc. */}
        <KolkataSection />

        {/* Secondary editorial ticker transition */}
        <Marquee theme="mint" speed="34s" />

        {/* 7. EVENT CATEGORIES: Typography-driven category explorer with hover reveals */}
        <Categories />

        {/* 8. VENUES: Editorial venue list with dynamic image reveals */}
        <Venues />

        {/* Cultural Collective / Manifesto Section */}
        <About />

        {/* Founding Member Pass / The Dreamlist */}
        <Dreamlist />

        {/* 9. FINAL CTA: Energetic & Playful "SO, WHAT'S ON?" */}
        <FinalCTA />
      </main>

      {/* 10. FOOTER: Minimal Creative Studio Colophon */}
      <Footer />
    </>
  );
}
