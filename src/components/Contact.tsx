import { useState } from "react";
import { Mail, ExternalLink, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready To Get <span className="text-gradient">Started?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Let's talk about how I can help bring your automation and IoT ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:ahmed@soviotech.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    ahmed@soviotech.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Upwork Profile</h3>
                  <a
                    href="https://www.upwork.com/freelancers/~01525b0753b485e150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    View Profile <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>

            <div className="p-8 bg-gradient-primary rounded-xl text-primary-foreground">
              <h3 className="font-bold text-xl mb-2">You Know About Me</h3>
              <p className="text-primary-foreground/90 mb-4">Let's Talk About You</p>
              <p className="text-sm text-primary-foreground/80">
                Ready to discuss your project? Send me a message and I'll respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 border-primary/20 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground glow-effect transition-all duration-300"
                size="lg"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
