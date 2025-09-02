import { Card } from "@/components/ui/card";
import { Database, Brain, Monitor, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Database,
      title: "Connect",
      description: "APIs pull real-time data from FDA, EMA, ClinicalTrials.gov, SEC filings, and pharma press releases.",
      details: ["FDA Drug Approval Database", "ClinicalTrials.gov Registry", "SEC Financial Filings", "Pharma Press Releases", "Patent Databases"]
    },
    {
      icon: Brain,
      title: "Process", 
      description: "AI organizes pipelines, approvals, and investments into clean insights.",
      details: ["Machine Learning Analysis", "Natural Language Processing", "Data Standardization", "Pattern Recognition", "Risk Assessment"]
    },
    {
      icon: Monitor,
      title: "Deliver",
      description: "You get dashboards, alerts, and watchlists that save hours of research.",
      details: ["Interactive Dashboards", "Real-time Alerts", "Custom Watchlists", "Executive Reports", "Mobile Access"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to transform fragmented pharma data into actionable intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <Card className="card-glass p-8 h-full group hover:shadow-glow transition-smooth">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <div className="pt-4 border-t border-border/50">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center justify-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to see it in action?
            </p>
            <button 
              className="btn-hero"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;