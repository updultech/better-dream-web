
import { useState } from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";

const donationAmounts = [10, 25, 50, 100, 250];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    isMonthly: false,
  });

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);
    console.log("Processing donation:", { amount, isMonthly: donorInfo.isMonthly, ...donorInfo });
    
    // Here you would typically integrate with a payment processor
    alert("Thank you for your support! This would connect to a payment processor in a production environment.");
  };

  return (
    <section id="donate" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium mb-4">
            Support Our Cause
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            Make a Donation
          </h2>
          <p className="text-lg text-muted-foreground">
            Your contribution helps us expand our programs and reach more children and communities in need across Ghana.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 slide-in-left">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">How Your Donation Helps</h3>
                <div className="space-y-4">
                  {[
                    { amount: "$25", impact: "Provides school supplies for a child for a semester" },
                    { amount: "$50", impact: "Supports a teacher's training workshop" },
                    { amount: "$100", impact: "Funds a month of meals for 10 children" },
                    { amount: "$250", impact: "Helps establish a small community library" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold shrink-0">
                        {item.amount}
                      </div>
                      <div className="pt-1">
                        <p className="text-muted-foreground">{item.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 bg-secondary rounded-lg border border-border/50">
                <h4 className="font-medium mb-2">Other Ways to Support</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Beyond financial contributions, we welcome volunteers, partnerships, and in-kind donations.
                </p>
                <a href="#contact" className="text-accent hover:underline text-sm font-medium">
                  Contact us to learn more →
                </a>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-6 border border-border/50 shadow-lg fade-in-up">
              <form onSubmit={handleDonate} className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-sm font-medium">Select Donation Amount</label>
                  <div className="grid grid-cols-3 gap-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={cn(
                          "p-3 rounded-lg border text-center transition-all",
                          selectedAmount === amount
                            ? "border-accent/50 bg-accent/5 text-accent"
                            : "border-border bg-background hover:border-accent/30"
                        )}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <label className="block text-sm font-medium mb-1">Custom Amount</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-muted-foreground">$</span>
                      </div>
                      <input
                        type="number"
                        className="w-full pl-8 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="monthly"
                      type="checkbox"
                      className="w-4 h-4 text-accent rounded border-border focus:ring-accent/50"
                      checked={donorInfo.isMonthly}
                      onChange={(e) => setDonorInfo({ ...donorInfo, isMonthly: e.target.checked })}
                    />
                    <label htmlFor="monthly" className="ml-2 text-sm">
                      Make this a monthly donation
                    </label>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your Name"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your Email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={!donorInfo.name || !donorInfo.email || (!selectedAmount && !customAmount)}
                >
                  Donate {donorInfo.isMonthly ? "Monthly" : "Now"}
                </Button>
                
                <div className="text-xs text-center text-muted-foreground">
                  Your donation is tax-deductible to the extent allowed by law.
                  <br />All financial information is secured with 256-bit encryption.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
