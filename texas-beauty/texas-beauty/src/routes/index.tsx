import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Texas Beauty Salon — Luxury Hair & Beauty in Spring, TX" },
      {
        name: "description",
        content:
          "Texas Beauty Salon in Spring, TX offers luxury hair styling, coloring, keratin treatments, manicures and premium beauty care. Book your appointment today.",
      },
      { property: "og:title", content: "Texas Beauty Salon — Luxury Hair & Beauty in Spring, TX" },
      { property: "og:description", content: "Professional hair styling, beauty treatments & premium salon care in Spring, Texas." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Texas Beauty Salon",
          image: "/og-image.jpg",
          telephone: "+1-832-922-5592",
          email: "bermillobeautysalon@outlook.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4915 Farm to Market 2920",
            addressLocality: "Spring",
            addressRegion: "TX",
            postalCode: "77388",
            addressCountry: "US",
          },
          openingHours: "Mo-Su 00:00-23:59",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
