import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import Booking from "@/components/Booking";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <Booking />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
