import { Cpu, Cloud, Brain, Radio, BarChart3, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Cpu,
      title: "IoT Development",
      description: "ESP32, Raspberry Pi, NVIDIA Jetson, microcontrollers",
    },
    {
      icon: Shield,
      title: "Industrial Automation",
      description: "PLCs, custom controllers, secure offline systems",
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Intelligent automation and predictive maintenance",
    },
    {
      icon: Radio,
      title: "Sensor Integration",
      description: "BLE, LPWAN, WiFi, MQTT protocols",
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Grafana, ThingsBoard, custom web applications",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "End-to-end hardware to cloud solutions",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card hover:-translate-y-2 bg-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{skill.title}</h3>
                <p className="text-foreground/70 text-sm">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
