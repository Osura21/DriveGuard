import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Abstract from "@/components/Abstract";
import LiteratureReview from "@/components/LiteratureReview";
import Features from "@/components/Features";
import Technologies from "@/components/Technologies";
import Team from "@/components/Team";
import Milestones from "@/components/Milestones";
import Resources from "@/components/Resources";
import Results from "@/components/Results";
import FinalOutput from "@/components/FinalOutput";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Abstract />
      <LiteratureReview />
      <Features />
      <Technologies />
      <Team />
      <Milestones />
      <Resources />
      <Results />
      <FinalOutput />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
