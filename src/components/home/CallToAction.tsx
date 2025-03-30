
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thanks for joining the movement!",
        description: "We'll keep you updated on the latest developments.",
      });
      setEmail("");
      setName("");
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-digital-purple text-white" aria-labelledby="cta-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Join the Movement for Digital Rights
          </h2>
          
          <p className="text-lg mb-8 text-white/90">
            This isn't just a prediction. This is a movement already in motion.
            Join us in building a future where digital communities can truly thrive.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-left text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white/20 border-white/20 text-white placeholder:text-white/50"
                    aria-required="true"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-left text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/20 border-white/20 text-white placeholder:text-white/50"
                    aria-required="true"
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-digital-coral hover:bg-digital-coral/90"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Joining..." : "Endorse the Bill of Rights"}
              </Button>
              
              <p className="text-xs text-white/70">
                By joining, you'll receive updates on the movement and how you can take action.
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
