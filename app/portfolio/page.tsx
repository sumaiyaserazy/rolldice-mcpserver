import { Metadata } from "next"
import { SecurityDashboard } from "@/components/security-dashboard"
import { McpSecurityDemo } from "@/components/mcp-security-demo"
import { SecurityCaseStudies } from "@/components/security-case-studies"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, User, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Week 9: Portfolio Integration & Security Reporting | AI Agent Developer",
  description: "Comprehensive security portfolio showcasing MCP tool calling demonstrations, penetration testing results, and executive-level security dashboards. Advanced Agent Security & Professional Delivery.",
  keywords: [
    "MCP Security",
    "AI Agent Security",
    "Penetration Testing",
    "Security Dashboard",
    "OAuth 2.0",
    "Web Application Firewall",
    "Arcjet",
    "Kali Linux",
    "Security Case Studies",
    "AI Agent Developer",
    "Week 9 Portfolio"
  ],
  authors: [{ name: "Sumaiya Serazy" }],
  openGraph: {
    title: "Week 9: Portfolio Integration & Security Reporting",
    description: "Advanced Agent Security & Professional Delivery - MCP tool calling demonstrations with security context",
    type: "website",
    images: [
      {
        url: "/og-security-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Security Portfolio Dashboard"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Week 9: Security Portfolio Integration",
    description: "Comprehensive security demonstrations and case studies for AI Agent Development"
  }
}

export default function Week9Portfolio() {
  return (
    <div className="container mx-auto py-8 px-4 space-y-12 max-w-7xl">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4" />
          <span>AI Agent Developer Workshop</span>
          <span>•</span>
          <span>Week 9 Deliverable</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Portfolio Integration & Security Reporting
          </h1>
          <p className="text-xl text-muted-foreground">
            Advanced Agent Security & Professional Delivery
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="default" className="bg-blue-500">
            <Calendar className="h-3 w-3 mr-1" />
            Week 9: November 2025
          </Badge>
          <Badge variant="outline">
            <User className="h-3 w-3 mr-1" />
            Sumaiya Serazy
          </Badge>
          <Badge variant="outline">
            <Award className="h-3 w-3 mr-1" />
            Advanced Security Implementation
          </Badge>
        </div>
      </div>

      <Separator />

      {/* Learning Objectives */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle>Learning Objectives Achieved</CardTitle>
          <CardDescription>
            Week 9 deliverables demonstrating comprehensive security integration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div>
                  <p className="font-medium">Extended Digital Portfolio with Security Sections</p>
                  <p className="text-sm text-muted-foreground">
                    Integrated security dashboard, case studies, and demonstrations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div>
                  <p className="font-medium">MCP Tool Calling Demonstrations</p>
                  <p className="text-sm text-muted-foreground">
                    Interactive security validation pipeline with real-time monitoring
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div>
                  <p className="font-medium">Executive Security Dashboards</p>
                  <p className="text-sm text-muted-foreground">
                    WAF, Arcjet, and MCP telemetry with actionable insights
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div>
                  <p className="font-medium">Security Case Studies</p>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive documentation with LMS references and Kali findings
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div>
                  <p className="font-medium">Analytics & SEO Integration</p>
                  <p className="text-sm text-muted-foreground">
                    Professional metadata, Open Graph tags, and reusable components
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div>
                  <p className="font-medium">Protector Outcomes Emphasized</p>
                  <p className="text-sm text-muted-foreground">
                    Zero critical vulnerabilities, 98.7% attack prevention rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Executive Security Dashboard */}
      <section id="dashboard">
        <SecurityDashboard />
      </section>

      <Separator />

      {/* MCP Security Demonstration */}
      <section id="mcp-demo">
        <McpSecurityDemo />
      </section>

      <Separator />

      {/* Security Case Studies */}
      <section id="case-studies">
        <SecurityCaseStudies />
      </section>

      <Separator />

      {/* Workshop References */}
      <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <CardHeader>
          <CardTitle>AI Agent Developer Workshop References</CardTitle>
          <CardDescription>
            Course materials and resources aligned with this deliverable
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold">Week 2: Digital Portfolio</h4>
              <p className="text-sm text-muted-foreground">
                Foundation portfolio structure extended with security sections
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Week 4-5: Penetration Testing</h4>
              <p className="text-sm text-muted-foreground">
                Kali Linux tools and vulnerability assessment methodologies
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Week 6-7: Security Layers</h4>
              <p className="text-sm text-muted-foreground">
                WAF implementation, Arcjet integration, and bot protection
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Week 8: MCP Security</h4>
              <p className="text-sm text-muted-foreground">
                OAuth 2.0 authentication and secure tool calling patterns
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Week 9-10: Integration</h4>
              <p className="text-sm text-muted-foreground">
                Portfolio delivery, SEO optimization, and analytics setup
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Security Best Practices</h4>
              <p className="text-sm text-muted-foreground">
                OWASP Top 10, defense in depth, and continuous monitoring
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Note */}
      <div className="text-center text-sm text-muted-foreground py-8">
        <p>
          This portfolio demonstrates advanced security implementations for AI agents and MCP servers.
        </p>
        <p className="mt-2">
          All security measures have been validated through penetration testing and continuous monitoring.
        </p>
      </div>
    </div>
  )
}
