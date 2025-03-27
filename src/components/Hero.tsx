
import Button from "./Button";
import { cn } from "@/lib/utils";
import AnimatedImage from "./AnimatedImage";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-80" />
      
      {/* Content Container */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2 fade-in">
              Creating Better Futures
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight fade-in-up">
              Empowering Ghana's Youth Through Education
            </h1>
            
            <p className="text-lg text-muted-foreground fade-in-up animate-delay-100">
              Better Dream Foundation Ghana is dedicated to improving educational opportunities, reducing poverty, and creating sustainable change in communities across Ghana.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 fade-in-up animate-delay-200">
              <Button size="lg" onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}>
                Support Our Cause
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] slide-in-right">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-accent/10 to-transparent opacity-70 rounded-[40px] blur-3xl" />
            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=80"
                alt="Children in Ghana"
                className="w-full h-full object-cover"
                aspectRatio="aspect-[4/5] lg:aspect-[3/4]"
              />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:left-0 p-6 bg-background/80 backdrop-blur-md rounded-xl border border-border/50 shadow-lg max-w-[280px] transform hover:translate-y-[-5px] transition-transform duration-300 blur-in">
              <div className="flex space-x-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                    <path d="M9 12v6"></path>
                    <path d="M13 12v6"></path>
                    <path d="M14 7.4c0 .34-.14.66-.38.9l-4.2 4.2a1.3 1.3 0 0 1-.9.38 1.28 1.28 0 0 1-1.32-1.28V7.4c0-.34.14-.66.38-.9.24-.24.56-.38.9-.38h.04c.34 0 .66.14.9.38l4.2 4.2c.24.24.38.56.38.9Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Our Impact</h3>
                  <p className="text-2xl font-bold">1,200+</p>
                  <p className="text-sm text-muted-foreground">Children supported since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
