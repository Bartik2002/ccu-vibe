import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
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
      <Navbar />

      <main>
        {/* 1. HERO: Large asymmetric composition */}
        <Hero />

        {/* 2. FEATURED EVENT: One dominant visual */}
        <FeaturedEvent />

        {/* 4. UPCOMING EVENTS: Editorial list with mixed scale */}
        <UpcomingEvents />

        {/* 5. KOLKATA SECTION: Large typography + image composition */}
        <KolkataSection />

        {/* 6. CATEGORIES: Typography-driven navigation */}
        <Categories />

        {/* 7. VENUES: Simple editorial list */}
        <Venues />

        {/* 8. ABOUT: Cultural manifesto & photographic plates */}
        <About />

        {/* 9. DREAMLIST: Founding member credential pass */}
        <Dreamlist />

        {/* 10. FINAL CTA: Extremely minimal signoff */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

