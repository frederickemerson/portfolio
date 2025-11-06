"use client"

import { forwardRef } from "react"
import { ExternalLink } from "lucide-react"

interface IntroSectionProps {
  isDark: boolean
}

export const IntroSection = forwardRef<HTMLElement, IntroSectionProps>(({ isDark }, ref) => {
  return (
    <header id="intro" ref={ref} className="min-h-screen flex items-center animate-fade-in-up">
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2" data-animate>
            <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Frederick
              <br />
              <span className="text-muted-foreground">Amal Emerson</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md" data-animate>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A pragmatic idealist who believes the best way to predict the future is to architect it,{" "}
              <span className="text-foreground">one commit at a time</span>.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
                Open to opportunities
              </div>
              <button
                onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-white"
                style={{
                  background: isDark ? "hsl(var(--background))" : "hsl(var(--background))",
                  boxShadow: isDark
                    ? "8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)"
                    : "8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.9)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = isDark
                    ? "4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.05)"
                    : "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.9)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isDark
                    ? "8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)"
                    : "8px 8px 16px rgba(0, 0, 0, 0.1), -8px -4px 16px rgba(255, 255, 255, 0.9)"
                }}
              >
                <span className="font-medium">Let&apos;s Connect</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0" data-animate>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
            <div className="space-y-2">
              <div className="text-foreground">CTO & Developer</div>
              <div className="text-muted-foreground">@ Tuition Kaki</div>
              <div className="text-xs text-muted-foreground">Jan 2025 — Present</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">EDUCATION</div>
            <div className="space-y-2">
              <div className="text-foreground">National University of Singapore</div>
              <div className="text-sm text-muted-foreground">Computer Engineering (Hons.)</div>
              <div className="text-sm text-muted-foreground">Minor in Nano Science</div>
              <div className="text-xs text-muted-foreground">Batch 2027</div>
              <div className="text-xs text-foreground mt-2">NUS Science & Technology Scholar</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})

IntroSection.displayName = "IntroSection"

