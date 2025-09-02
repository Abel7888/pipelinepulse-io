import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get <span className="text-gradient">Early Access</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your pharmaceutical intelligence? Request early access or schedule a personalized demo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="card-glass p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm">hello@drugpipe.com</p>
                  </div>
                </div>
              </Card>

              <Card className="card-glass p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="card-glass p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">
                      San Francisco, CA<br />
                      Boston, MA
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-glass p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input 
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Pharma Corp, Biotech Ventures, etc."
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your use case and what you'd like to accomplish..."
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full group">
                    <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    Request Early Access
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Additional CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <Card className="card-glass p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Schedule a Demo</h3>
              <p className="text-muted-foreground mb-4">
                See the platform in action with your use case
              </p>
              <Button variant="outline" className="w-full">
                Book 30min Demo
              </Button>
            </Card>

            <Card className="card-glass p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Enterprise Sales</h3>
              <p className="text-muted-foreground mb-4">
                Custom solutions for large organizations
              </p>
              <Button variant="outline" className="w-full">
                Contact Enterprise Team
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;