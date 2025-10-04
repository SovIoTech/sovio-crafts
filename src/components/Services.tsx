import { Cog, Boxes, Sparkles, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "Custom Automation Solutions",
      description: "Tailored automation systems designed specifically for your business needs and workflows.",
    },
    {
      icon: Boxes,
      title: "IoT Systems",
      description: "Complete end-to-end IoT solutions from hardware integration to cloud connectivity.",
    },
    {
      icon: Sparkles,
      title: "AI/ML-Enhanced Automation",
      description: "Smart automation workflows powered by artificial intelligence and machine learning.",
    },
    {
      icon: Lock,
      title: "Secure Offline Automation",
      description: "Reliable offline automation deployments with robust security and data protection.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Awesome <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Specialized offerings to help you transform your ideas into powerful, 
            working automation and IoT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 bg-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
