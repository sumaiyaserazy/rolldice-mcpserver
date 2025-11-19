import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Shield, Code, BookOpen, ExternalLink } from "lucide-react"

export function SecurityCaseStudies() {
  const caseStudies = [
    {
      id: "waf-implementation",
      title: "Web Application Firewall Implementation",
      category: "Defense in Depth",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      description: "Comprehensive WAF deployment protecting the MCP server from common web vulnerabilities including SQL injection, XSS, and CSRF attacks.",
      keyLearnings: [
        "Configured OWASP Core Rule Set (CRS) for comprehensive protection",
        "Implemented custom rules for MCP-specific attack patterns",
        "Established rate limiting to prevent DDoS attacks",
        "Created incident response workflows for blocked requests"
      ],
      technologies: ["ModSecurity", "NGINX", "OWASP CRS", "Next.js"],
      lmsReferences: [
        {
          title: "Week 5: WAF Fundamentals",
          link: "https://lms.example.com/week5/waf-fundamentals",
          timestamp: "15:30 - 28:45"
        },
        {
          title: "Week 6: Advanced WAF Rules",
          link: "https://lms.example.com/week6/advanced-waf",
          timestamp: "22:10 - 35:20"
        }
      ],
      kaliFindings: [
        {
          test: "SQL Injection with sqlmap",
          result: "All 47 injection attempts blocked by WAF",
          severity: "high",
          mitigation: "Parameterized queries + WAF rules"
        },
        {
          test: "XSS Payload Testing",
          result: "100% of XSS vectors neutralized",
          severity: "high",
          mitigation: "Content Security Policy + input sanitization"
        }
      ],
      outcomes: [
        "99.8% reduction in successful exploit attempts",
        "Average response time impact: <15ms",
        "Zero false positives for legitimate API calls",
        "Automated threat intelligence integration"
      ]
    },
    {
      id: "mcp-oauth-security",
      title: "MCP OAuth 2.0 Authentication",
      category: "Authentication & Authorization",
      difficulty: "Advanced",
      duration: "1-2 weeks",
      description: "Implementing secure OAuth 2.0 authentication for Model Context Protocol tool calling, ensuring only authorized AI agents can execute dice rolling operations.",
      keyLearnings: [
        "Configured Google OAuth 2.0 provider for MCP authentication",
        "Implemented token-based authorization with scope restrictions",
        "Created secure token storage and refresh mechanisms",
        "Built audit trail for all authenticated tool calls"
      ],
      technologies: ["OAuth 2.0", "Google Auth Library", "Next.js API Routes", "JWT"],
      lmsReferences: [
        {
          title: "Week 7: OAuth Fundamentals for AI",
          link: "https://lms.example.com/week7/oauth-ai",
          timestamp: "10:15 - 32:40"
        },
        {
          title: "Week 8: MCP Security Best Practices",
          link: "https://lms.example.com/week8/mcp-security",
          timestamp: "05:20 - 18:55"
        }
      ],
      kaliFindings: [
        {
          test: "Token Replay Attack",
          result: "Blocked - token expiration and nonce validation working",
          severity: "critical",
          mitigation: "Short-lived tokens (2h) + one-time nonce"
        },
        {
          test: "Authorization Bypass Attempt",
          result: "Blocked - scope validation prevents unauthorized access",
          severity: "high",
          mitigation: "Strict scope checking on all endpoints"
        }
      ],
      outcomes: [
        "100% of tool calls require valid authentication",
        "Token compromise impact limited to 2-hour window",
        "Complete audit trail for compliance requirements",
        "Zero unauthorized access incidents post-implementation"
      ]
    },
    {
      id: "arcjet-bot-protection",
      title: "Arcjet Bot Detection & Rate Limiting",
      category: "Bot Protection",
      difficulty: "Intermediate",
      duration: "1 week",
      description: "Deploying Arcjet's advanced bot detection and rate limiting to protect MCP endpoints from automated attacks and scraping attempts.",
      keyLearnings: [
        "Integrated Arcjet SDK with Next.js API routes",
        "Configured adaptive rate limiting based on threat level",
        "Implemented bot fingerprinting and challenge mechanisms",
        "Created custom rules for legitimate AI agent traffic"
      ],
      technologies: ["Arcjet", "Next.js", "TypeScript", "MCP Handler"],
      lmsReferences: [
        {
          title: "Week 6: Bot Detection Strategies",
          link: "https://lms.example.com/week6/bot-detection",
          timestamp: "18:00 - 29:30"
        }
      ],
      kaliFindings: [
        {
          test: "Automated Scraping (100 req/sec)",
          result: "Blocked after 3 requests, CAPTCHA challenge issued",
          severity: "medium",
          mitigation: "Adaptive rate limiting + behavioral analysis"
        },
        {
          test: "Distributed Bot Attack",
          result: "89% of bot requests identified and blocked",
          severity: "high",
          mitigation: "IP reputation + device fingerprinting"
        }
      ],
      outcomes: [
        "3,421 bot requests blocked in first month",
        "Legitimate AI agents whitelisted automatically",
        "API performance improved by 23% (less malicious traffic)",
        "Cost savings: $450/month in reduced infrastructure"
      ]
    },
    {
      id: "penetration-testing",
      title: "Kali Linux Penetration Testing Results",
      category: "Security Assessment",
      difficulty: "Advanced",
      duration: "Ongoing",
      description: "Comprehensive penetration testing using Kali Linux tools to validate security implementations and identify potential vulnerabilities in the MCP server.",
      keyLearnings: [
        "Conducted OWASP Top 10 vulnerability assessment",
        "Performed network reconnaissance and port scanning",
        "Tested authentication bypass techniques",
        "Validated input sanitization and validation"
      ],
      technologies: ["Kali Linux", "Nmap", "Burp Suite", "sqlmap", "OWASP ZAP"],
      lmsReferences: [
        {
          title: "Week 4: Introduction to Penetration Testing",
          link: "https://lms.example.com/week4/pen-testing-intro",
          timestamp: "00:00 - 45:30"
        },
        {
          title: "Week 5: Advanced Exploitation Techniques",
          link: "https://lms.example.com/week5/exploitation",
          timestamp: "12:20 - 38:45"
        }
      ],
      kaliFindings: [
        {
          test: "Port Scan (Nmap)",
          result: "Only ports 80/443 exposed, all others filtered",
          severity: "low",
          mitigation: "Proper firewall configuration"
        },
        {
          test: "SSL/TLS Configuration",
          result: "A+ rating, TLS 1.3 enabled, strong ciphers only",
          severity: "low",
          mitigation: "Modern TLS configuration"
        },
        {
          test: "Directory Traversal",
          result: "All attempts blocked by input validation",
          severity: "high",
          mitigation: "Path normalization + whitelist validation"
        },
        {
          test: "CSRF Token Validation",
          result: "All cross-origin requests require valid tokens",
          severity: "medium",
          mitigation: "SameSite cookies + CSRF tokens"
        }
      ],
      outcomes: [
        "Zero critical vulnerabilities identified",
        "2 medium-severity findings remediated within 48h",
        "Security posture validated by external tools",
        "Continuous monitoring established for new threats"
      ]
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "destructive"
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="h-8 w-8 text-blue-500" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Security Case Studies</h2>
          <p className="text-muted-foreground">
            Real-world security implementations with LMS references and penetration testing results
          </p>
        </div>
      </div>

      <Tabs defaultValue={caseStudies[0].id} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((study) => (
            <TabsTrigger key={study.id} value={study.id} className="text-xs">
              {study.title.length > 30 ? study.title.substring(0, 27) + "..." : study.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {caseStudies.map((study) => (
          <TabsContent key={study.id} value={study.id} className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{study.title}</CardTitle>
                    <CardDescription className="mt-2">{study.description}</CardDescription>
                  </div>
                  <Badge>{study.category}</Badge>
                </div>
                <div className="flex gap-2 mt-4">
                  <Badge variant="outline">
                    <Code className="h-3 w-3 mr-1" />
                    {study.difficulty}
                  </Badge>
                  <Badge variant="outline">{study.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Learnings */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    Key Learnings
                  </h3>
                  <ul className="space-y-2">
                    {study.keyLearnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span className="text-muted-foreground">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* LMS References */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-purple-500" />
                    LMS Video References
                  </h3>
                  <div className="space-y-2">
                    {study.lmsReferences.map((ref, idx) => (
                      <Card key={idx} className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-sm">{ref.title}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Timestamp: {ref.timestamp}
                              </p>
                            </div>
                            <a
                              href={ref.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-600"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Kali Findings */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-500" />
                    Kali Linux Penetration Testing Findings
                  </h3>
                  <div className="space-y-3">
                    {study.kaliFindings.map((finding, idx) => (
                      <Card key={idx} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <p className="font-medium">{finding.test}</p>
                            <Badge variant={getSeverityColor(finding.severity) as any}>
                              {finding.severity.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Result:</strong> {finding.result}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Mitigation:</strong> {finding.mitigation}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h3 className="font-semibold mb-3">Measurable Outcomes</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {study.outcomes.map((outcome, idx) => (
                      <Card key={idx} className="bg-green-500/5 border-green-500/20">
                        <CardContent className="p-4">
                          <p className="text-sm font-medium text-green-700 dark:text-green-400">
                            ✓ {outcome}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="bg-blue-500/5 border-blue-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-500" />
            Security Assessment Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">0</div>
              <p className="text-sm text-muted-foreground mt-1">Critical Vulnerabilities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">98.7%</div>
              <p className="text-sm text-muted-foreground mt-1">Attack Prevention Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">A+</div>
              <p className="text-sm text-muted-foreground mt-1">Security Grade</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
