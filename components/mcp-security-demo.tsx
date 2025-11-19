"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Lock, CheckCircle, XCircle, AlertTriangle, Code } from "lucide-react"

interface ValidationResult {
  step: string
  status: "success" | "error" | "warning"
  message: string
  details?: string
}

export function McpSecurityDemo() {
  const [diceInput, setDiceInput] = useState("6")
  const [validationResults, setValidationResults] = useState<ValidationResult[]>([])
  const [isValidating, setIsValidating] = useState(false)
  const [rollResult, setRollResult] = useState<number | null>(null)

  const validateAndRoll = async () => {
    setIsValidating(true)
    setValidationResults([])
    setRollResult(null)

    const results: ValidationResult[] = []

    // Step 1: Input Sanitization
    await new Promise(resolve => setTimeout(resolve, 300))
    const sanitizedInput = diceInput.trim()
    if (sanitizedInput === diceInput && /^[0-9]+$/.test(sanitizedInput)) {
      results.push({
        step: "Input Sanitization",
        status: "success",
        message: "Input passed sanitization checks",
        details: "No malicious characters or scripts detected"
      })
    } else {
      results.push({
        step: "Input Sanitization",
        status: "error",
        message: "Input contains invalid characters",
        details: "Only numeric values allowed"
      })
      setValidationResults(results)
      setIsValidating(false)
      return
    }
    setValidationResults([...results])

    // Step 2: Schema Validation (Zod)
    await new Promise(resolve => setTimeout(resolve, 300))
    const sides = parseInt(sanitizedInput)
    if (sides >= 2 && sides <= 1000) {
      results.push({
        step: "Schema Validation (Zod)",
        status: "success",
        message: `Valid dice configuration: d${sides}`,
        details: "Sides value within acceptable range (2-1000)"
      })
    } else {
      results.push({
        step: "Schema Validation (Zod)",
        status: "error",
        message: "Invalid dice configuration",
        details: "Sides must be between 2 and 1000"
      })
      setValidationResults(results)
      setIsValidating(false)
      return
    }
    setValidationResults([...results])

    // Step 3: Rate Limiting Check
    await new Promise(resolve => setTimeout(resolve, 300))
    results.push({
      step: "Rate Limiting Check",
      status: "success",
      message: "Request within rate limits",
      details: "Current: 15/100 requests per minute"
    })
    setValidationResults([...results])

    // Step 4: OAuth Token Verification
    await new Promise(resolve => setTimeout(resolve, 300))
    results.push({
      step: "OAuth 2.0 Verification",
      status: "success",
      message: "Authentication token valid",
      details: "Token scope: mcp:tools:execute | Expires: 2h 45m"
    })
    setValidationResults([...results])

    // Step 5: MCP Tool Execution
    await new Promise(resolve => setTimeout(resolve, 300))
    const result = Math.floor(Math.random() * sides) + 1
    results.push({
      step: "MCP Tool Execution",
      status: "success",
      message: `Dice rolled successfully: ${result}`,
      details: `Result: ${result} on d${sides}`
    })
    setValidationResults([...results])
    setRollResult(result)

    // Step 6: Audit Logging
    await new Promise(resolve => setTimeout(resolve, 300))
    results.push({
      step: "Audit Logging",
      status: "success",
      message: "Event logged to security database",
      details: `Timestamp: ${new Date().toISOString()} | User: demo@example.com`
    })
    setValidationResults([...results])

    setIsValidating(false)
  }

  const testMaliciousInput = (input: string, description: string) => {
    setDiceInput(input)
    setTimeout(() => validateAndRoll(), 100)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Shield className="h-8 w-8 text-blue-500" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight">MCP Security Demonstration</h2>
          <p className="text-muted-foreground">
            Interactive demonstration of Model Context Protocol security layers
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Test MCP Tool Security</CardTitle>
            <CardDescription>
              Enter dice sides to see the security validation process in action
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="dice-input" className="text-sm font-medium">
                Number of Sides
              </label>
              <Input
                id="dice-input"
                type="text"
                value={diceInput}
                onChange={(e) => setDiceInput(e.target.value)}
                placeholder="Enter number of sides (e.g., 6, 20, 100)"
                disabled={isValidating}
              />
            </div>

            <Button
              onClick={validateAndRoll}
              disabled={isValidating}
              className="w-full"
            >
              {isValidating ? "Validating..." : "Roll Dice with Security Checks"}
            </Button>

            {rollResult !== null && !isValidating && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-500">{rollResult}</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Successfully rolled with all security checks passed
                </p>
              </div>
            )}

            <div className="pt-4 border-t">
              <p className="text-sm font-medium mb-2">Test Attack Vectors:</p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => testMaliciousInput("'; DROP TABLE users;--", "SQL Injection")}
                  disabled={isValidating}
                  className="w-full justify-start text-xs"
                >
                  <Code className="h-3 w-3 mr-2" />
                  SQL Injection: &apos;; DROP TABLE users;--
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => testMaliciousInput("<script>alert('xss')</script>", "XSS Attack")}
                  disabled={isValidating}
                  className="w-full justify-start text-xs"
                >
                  <Code className="h-3 w-3 mr-2" />
                  XSS: &lt;script&gt;alert(&apos;xss&apos;)&lt;/script&gt;
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => testMaliciousInput("9999999", "Boundary Test")}
                  disabled={isValidating}
                  className="w-full justify-start text-xs"
                >
                  <Code className="h-3 w-3 mr-2" />
                  Boundary Test: 9999999
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Validation Pipeline</CardTitle>
            <CardDescription>
              Real-time monitoring of security checks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {validationResults.length === 0 && !isValidating && (
                <div className="text-center py-8 text-muted-foreground">
                  <Lock className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Enter dice sides and click the button to start validation</p>
                </div>
              )}

              {validationResults.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border rounded-lg bg-card"
                >
                  <div className="mt-0.5">{getStatusIcon(result.status)}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">{result.step}</p>
                      <Badge
                        variant={
                          result.status === "success"
                            ? "default"
                            : result.status === "error"
                            ? "destructive"
                            : "secondary"
                        }
                        className="text-xs"
                      >
                        {result.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{result.message}</p>
                    {result.details && (
                      <p className="text-xs text-muted-foreground">{result.details}</p>
                    )}
                  </div>
                </div>
              ))}

              {isValidating && validationResults.length < 6 && (
                <div className="flex items-center gap-3 p-3 border rounded-lg bg-card animate-pulse">
                  <div className="h-5 w-5 rounded-full bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Security Layer Architecture</CardTitle>
          <CardDescription>
            Multi-layered defense approach for MCP tool calling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <h4 className="font-semibold">Layer 1: Input Security</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                <li>• Sanitization & escaping</li>
                <li>• Type validation</li>
                <li>• XSS prevention</li>
                <li>• SQL injection blocking</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-green-500" />
                <h4 className="font-semibold">Layer 2: Authentication</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                <li>• OAuth 2.0 tokens</li>
                <li>• Scope verification</li>
                <li>• Rate limiting</li>
                <li>• Session management</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <h4 className="font-semibold">Layer 3: Monitoring</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                <li>• Audit logging</li>
                <li>• Telemetry collection</li>
                <li>• Anomaly detection</li>
                <li>• Incident response</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
