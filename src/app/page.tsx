import React from "react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import SignalBar from "@/components/SignalBar";
import ProblemSection from "@/components/ProblemSection";
import UrgencySection from "@/components/UrgencySection";
import MethodSection from "@/components/MethodSection";
import ServicesSection from "@/components/ServicesSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import StackSection from "@/components/StackSection";
import ProofSection from "@/components/ProofSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <ScrollReveal />
      <main>
        <Hero />
        <SignalBar />
        <ProblemSection />
        <UrgencySection />
        <MethodSection />
        <ServicesSection />
        <DiagnosticSection />
        <StackSection />
        <ProofSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
