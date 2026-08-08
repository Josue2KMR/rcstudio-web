import NavBar from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ContactCard } from "@/components/ContactCard";
import { ServiceCard } from "@/components/ServiceCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <Hero />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <ContactCard />
        </div>
      </section>
      <ServiceCard />
      <Footer />
    </div>
  );
}
