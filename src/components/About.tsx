import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
              IoT & Automation Engineer with 5+ years of experience helping businesses and startups 
              turn ideas into working solutions. Specialized in ESP32, Raspberry Pi, NVIDIA Jetson, 
              sensor integrations, automation workflows, dashboards, and predictive maintenance solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="text-foreground/70">
                      <span className="font-medium">BS Electrical Engineering</span>
                      <br />
                      PIEAS University, Islamabad
                      <br />
                      2020 – 2024
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Experience</h3>
                    <p className="text-foreground/70">
                      <span className="font-medium">Industrial Automation Engineer</span>
                      <br />
                      2 years at reputed Islamabad company
                      <br />
                      <span className="font-medium mt-2 block">Freelance IoT Engineer</span>
                      <br />
                      5+ years on platforms including Upwork
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
