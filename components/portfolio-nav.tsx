"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  Home, 
  Shield, 
  FileText, 
  Activity, 
  BookOpen,
  GraduationCap 
} from "lucide-react"

export function PortfolioNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      icon: GraduationCap,
    },
    {
      title: "Security Dashboard",
      href: "/portfolio#dashboard",
      icon: Shield,
    },
    {
      title: "MCP Demo",
      href: "/portfolio#mcp-demo",
      icon: Activity,
    },
    {
      title: "Case Studies",
      href: "/portfolio#case-studies",
      icon: FileText,
    },
    {
      title: "Documentation",
      href: "/#setup",
      icon: BookOpen,
    },
  ]

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">🎲</span>
            <span className="font-semibold">Roll Dice MCP</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href.split("#")[0]
              
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              )
            })}
          </div>

          <div className="md:hidden">
            <Button variant="outline" size="sm" asChild>
              <Link href="/portfolio">
                <GraduationCap className="h-4 w-4 mr-2" />
                Week 9 Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
