import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Bell, 
  User, 
  Settings,
  GitBranch,
  Radar,
  Users,
  TrendingUp,
  Star,
  FileText,
  Filter,
  Calendar,
  BarChart3,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const pipelineData = [
    { company: "Moderna", drug: "mRNA-1283", indication: "COVID-19", phase: "Phase III", probability: 87, status: "on-track" },
    { company: "Pfizer", drug: "PF-07321332", indication: "Alzheimer's", phase: "Phase II", probability: 62, status: "delayed" },
    { company: "Gilead", drug: "GS-441524", indication: "Hepatitis B", phase: "Phase I", probability: 45, status: "at-risk" },
    { company: "Roche", drug: "RG7112", indication: "Oncology", phase: "Phase III", probability: 78, status: "on-track" }
  ];

  const approvals = [
    { drug: "Leqembi", company: "Biogen", date: "2024-01-15", status: "approved", indication: "Alzheimer's" },
    { drug: "Zolgensma", company: "Novartis", date: "2024-02-03", status: "pending", indication: "SMA" },
    { drug: "Spinraza", company: "Biogen", date: "2024-02-20", status: "review", indication: "SMA" }
  ];

  const investments = [
    { company: "Vertex Pharma", type: "IPO", amount: "$2.3B", date: "2024-01-10", status: "hot" },
    { company: "Moderna", type: "Partnership", amount: "$800M", date: "2024-01-25", status: "warm" },
    { company: "Gilead Sciences", type: "Acquisition", amount: "$4.9B", date: "2024-02-01", status: "hot" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">DrugPipe Intelligence</span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search drugs, companies, therapeutic areas..."
                  className="pl-10 bg-background/50"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Intelligence Dashboard</h1>
          <p className="text-muted-foreground">Real-time pharmaceutical pipeline and market intelligence</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pipeline Intelligence Hub */}
            <Card className="card-glass p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Pipeline Intelligence Hub</h2>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="space-y-4">
                {pipelineData.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold">{item.company}</span>
                          <Badge variant="outline" className="text-xs">{item.drug}</Badge>
                          <Badge variant="secondary" className="text-xs">{item.phase}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.indication}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium">{item.probability}%</span>
                          {item.status === "on-track" && <CheckCircle className="h-4 w-4 text-success" />}
                          {item.status === "delayed" && <Clock className="h-4 w-4 text-warning" />}
                          {item.status === "at-risk" && <AlertCircle className="h-4 w-4 text-danger" />}
                        </div>
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary transition-all duration-500"
                            style={{ width: `${item.probability}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Regulatory Radar */}
            <Card className="card-glass p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Radar className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Regulatory Radar</h2>
              </div>

              <div className="space-y-4">
                {approvals.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50">
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="font-semibold">{item.drug}</span>
                        <Badge variant="outline" className="text-xs">{item.company}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.indication} • {item.date}</p>
                    </div>
                    <Badge 
                      className={`${
                        item.status === "approved" ? "bg-success" :
                        item.status === "pending" ? "bg-warning" : "bg-muted"
                      } text-white`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Watchlist */}
            <Card className="card-glass p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Your Watchlist</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Moderna COVID Pipeline</span>
                  <Badge variant="outline" className="text-xs">+2.3%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Alzheimer's Market</span>
                  <Badge variant="outline" className="text-xs text-danger">-1.1%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Oncology Therapeutics</span>
                  <Badge variant="outline" className="text-xs">+5.7%</Badge>
                </div>
              </div>
            </Card>

            {/* Investment Signals */}
            <Card className="card-glass p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Investment Signals</h3>
              </div>
              <div className="space-y-3">
                {investments.map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-background/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{item.company}</span>
                      <Badge 
                        className={`text-xs ${
                          item.status === "hot" ? "bg-danger text-white" : "bg-warning text-white"
                        }`}
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.type} • {item.amount} • {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="card-glass p-6">
              <h3 className="font-bold mb-4">Quick Reports</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Weekly Pipeline Summary
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Market Analysis Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Upcoming Approvals
                </Button>
              </div>
            </Card>

            {/* AI Briefing */}
            <Card className="card-glass p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="h-5 w-5 text-primary" />
                <h3 className="font-bold">AI Market Briefing</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-background/30">
                  <p className="mb-2">FDA approves breakthrough therapy for rare disease.</p>
                  <p className="text-xs text-muted-foreground">What this means: Increased focus on rare disease R&D.</p>
                </div>
                <div className="p-3 rounded-lg bg-background/30">
                  <p className="mb-2">Major pharma announces $2B acquisition of biotech.</p>
                  <p className="text-xs text-muted-foreground">What this means: Consolidation in oncology space accelerating.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;