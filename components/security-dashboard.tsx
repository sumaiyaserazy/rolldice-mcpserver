"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Activity, Lock, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

interface SecurityMetric {
  label: string
  value: string | number
  status: "success" | "warning" | "error"
  change?: string
}

interface SecurityEvent {
  timestamp: string
  type: string
  severity: "low" | "medium" | "high" | "critical"
  description: string
  action: string
}

export function SecurityDashboard() {
  // Mock data - in production, this would come from your security monitoring systems
  const wafMetrics: SecurityMetric[] = [
    { label: "Requests Blocked", value: "1,247", status: "success", change: "+12%" },
    { label: "SQL Injection Attempts", value: "89", status: "warning", change: "+5%" },
    { label: "XSS Attempts Blocked", value: "156", status: "success", change: "-3%" },
    { label: "Rate Limit Violations", value: "234", status: "warning", change: "+8%" },
  ]

  const arcjetMetrics: SecurityMetric[] = [
    { label: "Bot Requests Blocked", value: "3,421", status: "success", change: "+15%" },
    { label: "API Rate Limits Applied", value: "567", status: "success", change: "+2%" },
    { label: "Suspicious Patterns", value: "45", status: "warning", change: "-5%" },
    { label: "Shield Protection Active", value: "100%", status: "success", change: "0%" },
  ]

  const mcpTelemetry: SecurityMetric[] = [
    { label: "Tool Calls Today", value: "892", status: "success", change: "+18%" },
    { label: "Authentication Success", value: "98.5%", status: "success", change: "+0.5%" },
    { label: "Failed Auth Attempts", value: "12", status: "warning", change: "+3%" },
    { label: "Average Response Time", value: "145ms", status: "success", change: "-5%" },
  ]

  const recentEvents: SecurityEvent[] = [
    {
      timestamp: "2025-11-19 14:32:15",
      type: "SQL Injection Attempt",
      severity: "high",
      description: "Blocked malicious query in dice parameter",
      action: "Request blocked, IP logged"
    },
    {
      timestamp: "2025-11-19 14:28:43",
      type: "Rate Limit Exceeded",
      severity: "medium",
      description: "Client exceeded 100 requests/minute limit",
      action: "Temporary block for 5 minutes"
    },
    {
      timestamp: "2025-11-19 14:15:22",
      type: "Bot Detection",
      severity: "low",
      description: "Automated scraper detected",
      action: "Captcha challenge issued"
    },
    {
      timestamp: "2025-11-19 13:58:09",
      type: "XSS Attempt",
      severity: "high",
      description: "Script injection in MCP payload",
      action: "Request sanitized and logged"
    },
  ]

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
      case "high":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "medium":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "low":
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-500"
      case "warning":
        return "text-yellow-500"
      case "error":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Shield className="h-8 w-8 text-blue-500" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Executive Security Dashboard</h2>
          <p className="text-muted-foreground">Real-time security monitoring and threat intelligence</p>
        </div>
      </div>

      <Tabs defaultValue="waf" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="waf">
            <Shield className="h-4 w-4 mr-2" />
            WAF Metrics
          </TabsTrigger>
          <TabsTrigger value="arcjet">
            <Lock className="h-4 w-4 mr-2" />
            Arcjet Protection
          </TabsTrigger>
          <TabsTrigger value="mcp">
            <Activity className="h-4 w-4 mr-2" />
            MCP Telemetry
          </TabsTrigger>
          <TabsTrigger value="events">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Security Events
          </TabsTrigger>
        </TabsList>

        <TabsContent value="waf" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {wafMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                  <Shield className={`h-4 w-4 ${getStatusColor(metric.status)}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  {metric.change && (
                    <p className="text-xs text-muted-foreground">
                      {metric.change} from last week
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>WAF Configuration Status</CardTitle>
              <CardDescription>Web Application Firewall protection layers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span>SQL Injection Protection</span>
                <Badge variant="default" className="bg-green-500">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>XSS Filtering</span>
                <Badge variant="default" className="bg-green-500">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>CSRF Protection</span>
                <Badge variant="default" className="bg-green-500">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Rate Limiting</span>
                <Badge variant="default" className="bg-green-500">Active</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="arcjet" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {arcjetMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                  <Lock className={`h-4 w-4 ${getStatusColor(metric.status)}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  {metric.change && (
                    <p className="text-xs text-muted-foreground">
                      {metric.change} from last week
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Arcjet Shield Configuration</CardTitle>
              <CardDescription>Advanced bot detection and rate limiting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Bot Detection</span>
                <Badge variant="default" className="bg-green-500">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Email Validation</span>
                <Badge variant="default" className="bg-green-500">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Rate Limiting (API)</span>
                <Badge variant="default" className="bg-green-500">100/min</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Shield Rules</span>
                <Badge variant="default" className="bg-green-500">12 Active</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mcp" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {mcpTelemetry.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                  <Activity className={`h-4 w-4 ${getStatusColor(metric.status)}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  {metric.change && (
                    <p className="text-xs text-muted-foreground">
                      {metric.change} from last week
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>MCP Tool Security Status</CardTitle>
              <CardDescription>Model Context Protocol security monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Input Validation</span>
                <Badge variant="default" className="bg-green-500">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>OAuth 2.0 Authentication</span>
                <Badge variant="default" className="bg-green-500">Required</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Schema Validation</span>
                <Badge variant="default" className="bg-green-500">Zod + JSON</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Audit Logging</span>
                <Badge variant="default" className="bg-green-500">Enabled</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Security Events</CardTitle>
              <CardDescription>Last 24 hours of security incidents and responses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="mt-1">
                      {getSeverityIcon(event.severity)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{event.type}</p>
                        <Badge variant={getSeverityColor(event.severity) as any}>
                          {event.severity.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <p className="text-xs text-muted-foreground">Action: {event.action}</p>
                      <p className="text-xs text-muted-foreground">{event.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
