import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import MakeupServices from "@/components/MakeupServices";
import HowItWorks from "@/components/HowItWorks";
import BridalSection from "@/components/BridalSection";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Yazhini Makeup Artist | Best Beauty Services",
  description:
    "Yazhini Makeup Artist offers highly customized makeup services for weddings, events, fashion shoots, and more. Serving Chennai, Coimbatore, and all over Tamil Nadu.",
};

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <WhyChooseUs />
      <MakeupServices />
      <HowItWorks />
      <BridalSection />
      <Testimonials />
    </main>
  );
}
