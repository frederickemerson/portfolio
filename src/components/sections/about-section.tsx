"use client"

import { forwardRef, useRef } from "react"
import VariableProximity from "@/components/VariableProximity"

export const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLElement>(null)
  
  return (
    <section id="about" ref={(el) => {
      if (typeof ref === 'function') ref(el)
      else if (ref) ref.current = el
      containerRef.current = el
    }} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light" data-animate>
          <VariableProximity
            label="About Me"
            fromFontVariationSettings="'wght' 200"
            toFontVariationSettings="'wght' 700"
            containerRef={containerRef}
            radius={150}
            falloff="gaussian"
          />
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <div className="space-y-6" data-animate>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Less interested in what&apos;s hyped, more obsessed with what actually works.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I like building stuff that helps me and the people around me solve problems. It doesn&apos;t have to be
              world-changing—sometimes the best solutions are the ones that make someone&apos;s Tuesday a little less
              frustrating.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Whether it&apos;s a ticket scanner that processes thousands of entries without breaking a sweat, a learning
              tracker that actually makes you want to log your progress, or a text-to-SQL system that turns natural
              language into database queries—I&apos;m drawn to projects where the impact is tangible and immediate.
            </p>
          </div>

          <div className="space-y-6" data-animate>
            <p className="text-base text-muted-foreground leading-relaxed">
              My approach is simple: understand the problem deeply, prototype quickly, iterate based on real
              feedback, and ship something that people will actually use. No unnecessary complexity, no chasing
              trends for the sake of it.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I&apos;ve worked across the stack—from bare-metal embedded systems to full-stack web apps, from computer
              vision models to database architectures. This breadth isn&apos;t about collecting buzzwords; it&apos;s about
              having the right tool for each problem.
            </p>

            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                &quot;Just do it for its own sake. Do it for the love of the game.&quot; - Bruce Pandolfini
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"

