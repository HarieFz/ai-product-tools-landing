import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Workflows from "./components/Workflows";

export default function Home() {
  return (
    <>
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
