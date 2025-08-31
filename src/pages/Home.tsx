// src/pages/Home.tsx
import type { JSX } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import  FeaturesSection  from "../components/FeaturesSection";
import StepsSection from "../components/StepsSection";
import Footer from "../components/Footer";

export default function Home(): JSX.Element {
  return (
    <div>
      
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <StepsSection />
      </main>
      
      <Footer />
    </div>
  );
}
