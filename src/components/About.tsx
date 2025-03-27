
import AnimatedImage from "./AnimatedImage";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium mb-4">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            Our Story and Mission
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded in 2019, Better Dream Foundation Ghana was born from a vision to provide quality education and opportunity to underserved communities across Ghana.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative fade-in-up">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent blur-2xl transform -translate-y-4 opacity-70" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=1000&q=80"
                alt="Better Dream Foundation Ghana Team"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
          
          <div className="space-y-6 slide-in-right">
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">Our Vision</h3>
              <p className="text-muted-foreground">
                We envision a Ghana where every child has access to quality education, healthcare, and the opportunity to reach their full potential regardless of their socioeconomic background.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">Our Mission</h3>
              <p className="text-muted-foreground">
                To create sustainable educational opportunities, empower communities through skills development, and advocate for policies that improve the lives of vulnerable children and families in Ghana.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">Our Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Integrity", desc: "Maintaining the highest ethical standards" },
                  { title: "Compassion", desc: "Serving with empathy and understanding" },
                  { title: "Innovation", desc: "Finding creative solutions to complex problems" },
                  { title: "Sustainability", desc: "Creating lasting positive change" }
                ].map((value, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background border border-border/50 hover:border-accent/20 hover:bg-accent/5 transition-colors">
                    <h4 className="font-medium mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
