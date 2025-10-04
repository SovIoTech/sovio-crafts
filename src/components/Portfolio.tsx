import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectBattery from "@/assets/project-battery.jpg";
import projectLab from "@/assets/project-lab.jpg";
import projectParkcam from "@/assets/project-parkcam.jpg";
import projectHotel from "@/assets/project-hotel.jpg";

interface Project {
  title: string;
  description: string;
  details: string;
  image: string;
  tags: string[];
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Lab Monitoring Automation",
      description: "AI-powered camera monitoring of lab environments",
      details: "Developed an intelligent lab monitoring system using AI-powered cameras to track and analyze laboratory activities. The system provides real-time alerts, automated reporting, and comprehensive analytics for improved safety and efficiency.",
      image: projectLab,
      tags: ["AI/ML", "Computer Vision", "IoT", "Monitoring"],
    },
    {
      title: "Battery Management System",
      description: "Complete IoT solution from hardware to dashboards",
      details: "Built an end-to-end battery management system featuring custom hardware integration, real-time monitoring, anomaly detection, and comprehensive client dashboards. Includes historical data logging, predictive maintenance alerts, and detailed analytics.",
      image: projectBattery,
      tags: ["IoT", "Web App", "Dashboards", "Anomaly Detection"],
    },
    {
      title: "ParkCam Ride Capture",
      description: "Offline automation for rollercoaster photo capture",
      details: "Engineered a complete offline automation system for theme park ride photography. The system captures photos from hardware triggers, processes them in real-time, and delivers them to clients without requiring internet connectivity. Features robust offline operation and automated delivery workflows.",
      image: projectParkcam,
      tags: ["Automation", "Offline Systems", "Hardware Integration"],
    },
    {
      title: "Hotel Order Management",
      description: "Automated POS and kitchen printing system",
      details: "Created a comprehensive hotel order management system integrating POS terminals, kitchen display systems, and automated printing. The solution streamlines order processing from front desk to kitchen, reducing wait times and improving operational efficiency.",
      image: projectHotel,
      tags: ["Automation", "POS Integration", "Workflow"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group cursor-pointer bg-card"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button variant="secondary" size="sm" className="gap-2">
                    Read More <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-base pt-4">
              {selectedProject?.details}
            </DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
