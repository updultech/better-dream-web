
import { cn } from "@/lib/utils";

const stats = [
  { number: "1,200+", label: "Children Supported" },
  { number: "14", label: "Schools Partnered" },
  { number: "25", label: "Community Projects" },
  { number: "85%", label: "Graduation Rate" },
];

const testimonials = [
  {
    id: 1,
    content: "The Better Dream Foundation has completely transformed our school. With their support, we now have a computer lab and a library that our students use daily.",
    name: "Kofi Mensah",
    role: "School Headmaster, Accra",
  },
  {
    id: 2,
    content: "I received a scholarship from Better Dream Foundation that allowed me to complete my education. Now I'm studying engineering at university - a dream I never thought possible.",
    name: "Ama Owusu",
    role: "University Student",
  },
  {
    id: 3,
    content: "The vocational training program gave me the skills to start my own business. I now employ three people from my village and can support my family.",
    name: "Emmanuel Addo",
    role: "Small Business Owner",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium mb-4">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            Making a Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            We measure our success by the positive changes we create in communities and the lives we touch through our programs.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 fade-in-up">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center justify-center text-center p-6 rounded-xl bg-background border border-border/50 shadow-sm",
                "hover:border-accent/20 hover:bg-accent/5 transition-colors duration-300",
                `animate-delay-${index * 100}`
              )}
            >
              <div className="font-display font-bold text-3xl md:text-4xl mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold text-center mb-8 slide-in-left">Stories of Change</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "bg-background rounded-xl p-6 border border-border/50 shadow-sm",
                  "hover:shadow-md hover:border-accent/20 transition-all duration-300",
                  "flex flex-col h-full",
                  "fade-in-up",
                  `animate-delay-${index * 200}`
                )}
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="inline-block w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-auto">
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
