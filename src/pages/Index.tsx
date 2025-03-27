
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Team />
        <Donate />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
