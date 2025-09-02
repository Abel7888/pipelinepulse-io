import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Users } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      icon: Star,
      price: "0",
      period: "Always Free",
      description: "Perfect for getting started with basic pipeline intelligence",
      features: [
        "Approval calendar access",
        "Limited pipeline tracking (50 drugs)",
        "Basic regulatory alerts",
        "Community support",
        "Monthly market reports"
      ],
      limitations: [
        "Limited data history (6 months)",
        "No competitor analysis",
        "No API access"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      icon: Crown,
      price: "99",
      period: "per month", 
      description: "Complete intelligence suite for pharma professionals",
      features: [
        "Full pipeline intelligence",
        "Unlimited drug tracking",
        "Competitor insights & benchmarking",
        "Real-time alerts & notifications",
        "Investment intelligence & deal flow",
        "PDF/Excel report exports",
        "Email & Slack integrations",
        "Priority support",
        "5+ years historical data"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise", 
      icon: Users,
      price: "Custom",
      period: "tailored pricing",
      description: "Advanced features for large organizations and teams",
      features: [
        "Everything in Pro",
        "Team dashboards & collaboration",
        "Full API access & integrations",
        "White-label reports & branding",
        "Dedicated analyst support",
        "Custom data sources",
        "Advanced security & compliance",
        "Training & onboarding",
        "SLA guarantee"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Simple <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your needs. Start free, upgrade when you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative p-8 ${
                  plan.popular 
                    ? 'card-glass border-primary shadow-glow' 
                    : 'card-glass'
                } group hover:shadow-glow transition-smooth`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center space-y-6">
                  {/* Icon & Name */}
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-gradient">
                        {plan.price === "Custom" ? "" : "$"}{plan.price}
                      </span>
                      {plan.price !== "Custom" && plan.price !== "0" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 text-left">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t border-border/50">
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground/70">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'btn-hero' 
                          : 'border-muted hover:border-primary'
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => {
                        if (plan.name === "Enterprise") {
                          const element = document.querySelector("#contact");
                          if (element) element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 p-8 card-glass rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Questions?</h3>
            <p className="text-muted-foreground mb-6">
              All plans include 14-day free trial. No credit card required for Free tier.
              Enterprise customers get dedicated onboarding and training.
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;