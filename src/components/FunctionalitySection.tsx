import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GitBranch, 
  Radar, 
  Users, 
  TrendingUp, 
  Bell, 
  FileText,
  Target,
  BarChart3
} from "lucide-react";

const FunctionalitySection = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Pipeline Tracker",
      description: "Visualize every drug by phase with probability scoring.",
      features: ["Phase I-III progression tracking", "AI-powered success probability", "Therapeutic area filtering", "Geographic market analysis"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Radar,
      title: "Approval Radar", 
      description: "Live FDA/EMA calendars with real-time alerts.",
      features: ["PDUFA date tracking", "CHMP opinion calendar", "Real-time regulatory updates", "Risk signal detection"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Competitor Tracker",
      description: "Side-by-side comparisons of portfolios, trials, and patents.",
      features: ["Portfolio benchmarking", "Patent cliff analysis", "Clinical trial monitoring", "Market positioning insights"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Investment Signals",
      description: "Deal flow, funding rounds, M&A tracking.",
      features: ["IPO & funding alerts", "M&A activity monitoring", "Licensing deal tracker", "Valuation insights"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Instant notifications for critical developments.",
      features: ["Custom alert rules", "Email & push notifications", "Severity-based filtering", "Team collaboration"],
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: FileText,
      title: "Executive Reports",
      description: "Instant PDF/Excel exports for decision-makers.",
      features: ["One-click report generation", "Custom branding options", "Scheduled delivery", "Executive summaries"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="functionality" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Core <span className="text-gradient">Functionality</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to stay ahead in the pharmaceutical landscape
            </p>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              MVP Ready
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="card-glass p-8 group hover:shadow-glow transition-smooth relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth relative z-10">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Feature List */}
                  <div className="pt-4 border-t border-border/50">
                    <ul className="space-y-2 text-sm">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* API Integration Highlight */}
          <div className="mt-20 p-8 card-glass rounded-2xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">API-Powered Intelligence</h3>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Our platform integrates with <strong>20+ data sources</strong> to ensure your intelligence 
                is always live, accurate, and investment-ready.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {["FDA Database", "EMA Reports", "ClinicalTrials.gov", "SEC Filings", "PubMed", "Patent Offices", "News APIs", "Financial Markets"].map((source) => (
                  <Badge key={source} variant="outline" className="p-3 text-center">
                    {source}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalitySection;