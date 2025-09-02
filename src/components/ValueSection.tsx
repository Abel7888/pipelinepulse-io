import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Shield, Clock } from "lucide-react";

const ValueSection = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Find Opportunities Early",
      description: "Identify hot indications & undervalued biotech before the crowd.",
      benefits: [
        "Spot emerging therapeutic trends",
        "Identify undervalued companies",
        "Track pipeline gaps in competitive landscapes",
        "Monitor early-stage breakthrough therapies"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "React Instantly", 
      description: "Never miss an approval, setback, or delay.",
      benefits: [
        "Real-time FDA/EMA decision alerts",
        "Clinical trial milestone notifications",
        "Regulatory pathway changes",
        "Competitive intelligence updates"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "De-Risk Decisions",
      description: "Track competitor pipelines & regulatory risks in real time.",
      benefits: [
        "Competitive threat assessment",
        "Regulatory risk scoring",
        "Market saturation analysis",
        "Patent cliff monitoring"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Turn hours of research into a 5-minute executive overview.",
      benefits: [
        "Automated data aggregation",
        "AI-powered summarization", 
        "One-click executive reports",
        "Streamlined due diligence"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="value" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Value <span className="text-gradient">Delivered</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform how you make strategic decisions in the pharmaceutical industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="card-glass p-8 group hover:shadow-glow transition-smooth relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="pl-4 border-l-2 border-primary/20">
                    <ul className="space-y-3">
                      {value.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* ROI Stats */}
          <div className="mt-20 p-8 card-glass rounded-2xl">
            <h3 className="text-3xl font-bold mb-8">Measurable Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">87%</div>
                <div className="text-sm text-muted-foreground">Faster Decision Making</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">15hrs</div>
                <div className="text-sm text-muted-foreground">Weekly Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">3x</div>
                <div className="text-sm text-muted-foreground">More Opportunities Identified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">94%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;