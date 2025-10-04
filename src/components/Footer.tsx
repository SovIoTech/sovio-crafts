const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-xl font-bold">
            Ahmed<span className="text-gradient">.</span>
          </p>
          <p className="text-secondary-foreground/70">
            IoT & Automation Engineer
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="border-t border-primary/20 pt-6">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Ahmed Mohi U Din. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
