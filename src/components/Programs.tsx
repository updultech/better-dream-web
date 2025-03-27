
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedImage from "./AnimatedImage";

const programs = [
  {
    id: 1,
    title: "Educational Support",
    description: "Providing scholarships, learning materials, and infrastructure improvements to schools in underserved communities.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1000&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 8 6-4 6 4 6-4v12l-6 4-6-4-6 4V8z"></path>
        <path d="M14 10v4"></path>
        <path d="M10 10v4"></path>
        <path d="M6 10v4"></path>
        <path d="M18 10v4"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Health & Nutrition",
    description: "Implementing health education programs and providing nutritional support for children to enhance their learning capacity.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1000&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2h.1"></path>
        <path d="M7 2h.1"></path>
        <path d="M11 2h.1"></path>
        <path d="M15 2h.1"></path>
        <path d="M19 2h.1"></path>
        <circle cx="12" cy="11" r="2"></circle>
        <path d="M10 19c.6.5 1.2 1 2 1 .8 0 1.4-.5 2-1"></path>
        <path d="M18 19c-1.3-1.8-3.9-3-6-3s-4.7 1.2-6 3"></path>
        <path d="M4 19c.6-1.1 1.5-2 2.4-2.7"></path>
        <path d="M19.6 16.3c.9.7 1.8 1.6 2.4 2.7"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Skills Development",
    description: "Training young adults in vocational skills, entrepreneurship, and digital literacy to improve their economic opportunities.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1000&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        <path d="M17 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        <path d="M12 14h-1.63a3.4 3.4 0 0 0-1.82.55L5 17"></path>
        <path d="m21 17-3.55-2.45A3.4 3.4 0 0 0 15.63 14H14"></path>
        <path d="M16 20a2 2 0 1 1-4 0c0-1.05.8-2.1 2-3 1.2.9 2 1.95 2 3z"></path>
      </svg>
    ),
  },
];

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(programs[0]);

  return (
    <section id="programs" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            Creating Lasting Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Through our diverse programs, we address the multifaceted challenges facing Ghanaian communities, from education to healthcare and economic empowerment.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program)}
                className={cn(
                  "w-full text-left p-6 rounded-xl transition-all duration-300 ease-in-out border",
                  activeProgram.id === program.id
                    ? "bg-background border-accent/50 shadow-lg"
                    : "bg-background/50 border-border/50 hover:bg-background hover:border-accent/30"
                )}
              >
                <div className="flex items-start space-x-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    activeProgram.id === program.id ? "text-accent bg-accent/10" : "text-muted-foreground bg-secondary"
                  )}>
                    {program.icon}
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-bold text-lg mb-1",
                      activeProgram.id === program.id ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {program.title}
                    </h3>
                    <p className={cn(
                      "text-sm",
                      activeProgram.id === program.id ? "text-muted-foreground" : "text-muted-foreground/70"
                    )}>
                      {program.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-2 fade-in-up">
            <div className="relative h-full rounded-2xl overflow-hidden bg-background border border-border/50 shadow-xl">
              <div className="h-[300px] md:h-[400px]">
                <AnimatedImage
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">{activeProgram.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {activeProgram.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  {[
                    { label: "Communities", value: "12+" },
                    { label: "Beneficiaries", value: "500+" },
                    { label: "Years Active", value: "4+" },
                  ].map((stat, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/50">
                      <div className="font-bold text-2xl">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
