import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-lg text-muted-foreground">Drug Pipeline Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Drug Pipeline Intelligence.</span>
              <br />
              <span className="text-foreground">Delivered Instantly.</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our platform transforms fragmented trial, regulatory, and investment data into one simple dashboard. 
            Track drug pipelines, competitor activity, and approvals — and make smarter, faster decisions with confidence.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link to="/dashboard">
              <Button className="btn-hero text-lg px-10 py-6 group">
                Try the Dashboard
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-muted hover:border-primary transition-smooth"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">10K+</div>
              <div className="text-muted-foreground">Drug Pipelines Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">Real-time</div>
              <div className="text-muted-foreground">FDA/EMA Updates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">95%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow rounded-full animate-pulse opacity-40 animation-delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-pulse opacity-30 animation-delay-2000" />
      </div>
    </section>
  );
};

export default HeroSection;