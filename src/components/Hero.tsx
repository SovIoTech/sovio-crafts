import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img
          src={heroBg}
          alt="Tech Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 tech-pattern" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-16 h-16 border-2 border-primary-glow/30 rounded-full animate-float animation-delay-2000 hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-12 h-12 border-2 border-primary/20 rotate-45 animate-float animation-delay-4000 hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="relative inline-block animate-fade-in">
              <div className="absolute -left-4 -top-4 w-16 h-16 border-2 border-primary/30 rounded-lg -z-10" />
              <span className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase">
                Welcome to my Portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground leading-tight animate-fade-in animation-delay-200">
              Hi! I Am <br />
              <span className="text-gradient">Ahmed Mohi U Din</span>
            </h1>

            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-400">
              IoT & Automation Engineer
            </p>

            <p className="text-base md:text-lg text-secondary-foreground/70 max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-600">
              Building end-to-end IoT and automation solutions that connect hardware, cloud, and AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-800">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground glow-effect transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#portfolio">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  Contact Me <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-1000">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={profileImg}
                  alt="Ahmed Mohi U Din"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
