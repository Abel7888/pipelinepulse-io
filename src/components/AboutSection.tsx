import { Card } from "@/components/ui/card";
import { Users, Target, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are a healthcare intelligence company built for pharma leaders, biotech investors, and strategists. 
              Our mission is to replace noise with clarity — so you can move faster, de-risk your strategy, 
              and capture opportunities before anyone else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="card-glass p-8 text-center group hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Former pharma executives, data scientists, and regulatory experts who understand your challenges.
              </p>
            </Card>

            <Card className="card-glass p-8 text-center group hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Precision Focus</h3>
              <p className="text-muted-foreground">
                Specialized in pharmaceutical intelligence, not generic business analytics or consulting.
              </p>
            </Card>

            <Card className="card-glass p-8 text-center group hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Speed & Accuracy</h3>
              <p className="text-muted-foreground">
                Real-time data processing with AI-powered insights that save hours of manual research.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;