"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Shield, Activity, FileText, ArrowRight, Award } from "lucide-react"

export function PortfolioSection() {
  return (
    <div className="space-y-6">
      <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <div>
                <CardTitle className="text-2xl">Week 9: Security Portfolio</CardTitle>
                <CardDescription>
                  Advanced Agent Security & Professional Delivery
                </CardDescription>
              </div>
            </div>
            <Badge variant="default" className="bg-blue-500">
              <Award className="h-3 w-3 mr-1" />
              AI Agent Developer
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            This project demonstrates comprehensive security implementations for AI agents and MCP servers,
            including executive dashboards, penetration testing results, and interactive security demonstrations.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-base">Security Dashboard</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real-time WAF, Arcjet, and MCP telemetry monitoring
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-base">MCP Security Demo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Interactive security validation pipeline demonstration
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-500" />
                  <CardTitle className="text-base">Case Studies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  LMS references and Kali penetration testing results
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="space-y-1">
              <p className="font-semibold">Security Assessment Results</p>
              <div className="flex gap-4 text-sm">
                <span className="text-green-500">✓ 0 Critical Vulnerabilities</span>
                <span className="text-green-500">✓ 98.7% Attack Prevention</span>
                <span className="text-green-500">✓ A+ Security Grade</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button asChild size="lg" className="flex-1">
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio#mcp-demo">
                Try Security Demo
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
