
import AnimatedImage from "./AnimatedImage";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Kwame Nkrumah",
    role: "Executive Director",
    bio: "Kwame has over 15 years of experience in non-profit management and international development.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "kwame@betterdreamfoundation.org",
    },
  },
  {
    name: "Akosua Manu",
    role: "Programs Director",
    bio: "Akosua specializes in educational program development and has implemented projects across West Africa.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "akosua@betterdreamfoundation.org",
    },
  },
  {
    name: "Yaw Boateng",
    role: "Community Outreach Manager",
    bio: "Yaw builds relationships with community leaders to ensure our programs meet local needs.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "yaw@betterdreamfoundation.org",
    },
  },
  {
    name: "Abena Osei",
    role: "Finance Manager",
    bio: "Abena ensures transparent financial management and accountability in all our operations.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "abena@betterdreamfoundation.org",
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-50" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            The People Behind Our Mission
          </h2>
          <p className="text-lg text-muted-foreground">
            Our dedicated team brings diverse expertise and a shared passion for creating positive change in Ghana.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={cn(
                "bg-background rounded-xl overflow-hidden border border-border/50 shadow-sm",
                "hover:shadow-md hover:border-accent/20 transition-all duration-300",
                "group",
                "fade-in-up",
                `animate-delay-${index * 100}`
              )}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <AnimatedImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity group-hover:opacity-75" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-3 justify-center">
                      <a
                        href={member.social.linkedin}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href={member.social.twitter}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
