"use client"

import { forwardRef, useRef } from "react"
import VariableProximity from "@/components/VariableProximity"

export const WorkSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLElement>(null)
  const jobs = [
    {
      year: "2025",
      role: "Data Science Intern",
      company: "Banpu",
      description:
        "Developed text-to-SQL architecture using PathRAG knowledge graph, achieving sub-second query generation for production coal database with Azure OpenAI integration.",
      tech: ["Azure OpenAI", "PathRAG", "SQL", "Python"],
    },
    {
      year: "2025",
      role: "Website Designer & Maintainer",
      company: "NUS-UROP",
      description:
        "Revamped NUS UROP website on WordPress using Elementor, creating responsive interface and integrating optimized database for streamlined content management.",
      tech: ["WordPress", "Elementor", "Database Design"],
    },
    {
      year: "2025",
      role: "CTO & Developer",
      company: "Insure Lobang",
      description:
        "Architected ML-powered insurance recommendation platform with automated policy advisor matching and Telegram bot interface for seamless user engagement.",
      tech: ["Machine Learning", "Telegram Bot", "Next.js"],
    },
    {
      year: "2024",
      role: "Public Relations Lead",
      company: "UREC 2025",
      description:
        "Led publicity initiatives for UREC 2025, managing comprehensive outreach campaigns and event promotion. Designed official merchandise including event T-shirts and promotional stickers. Created and presented road-show materials, produced promotional content, and voiced the official event advertisement.",
      tech: ["Event Management", "Design", "Marketing"],
    },
    {
      year: "2024",
      role: "Web Application Developer",
      company: "TicketIT",
      description:
        "Developed complete web suite automating ticket creation and built high-speed scanning system processing 1,500+ tickets valued at $25,000+.",
      tech: ["React", "Mobile Optimization", "Scanner API"],
    },
    {
      year: "2024",
      role: "Research Assistant",
      company: "Metaverse Foundry",
      description:
        "Built neural network system for 3D rendering enhancement, implementing pixel optimization achieving 60% improvement in rendering speed.",
      tech: ["Neural Networks", "3D Graphics", "Python"],
    },
    {
      year: "2024",
      role: "Research Assistant",
      company: "IORA",
      description:
        "Analyzed transportation data from Grab service outage, implementing heterogeneity and robustness checks using R across different market conditions.",
      tech: ["R", "Statistical Modeling", "Data Analysis"],
    },
    {
      year: "2019",
      role: "Volunteer Teacher",
      company: "DISA, India",
      description:
        "Worked for 6 months to provide computer education to underprivileged students enrolled through the social service center. This initiative was to empower marginalized children with essential technological skills.",
      tech: ["Education", "Community Service", "Computer Literacy"],
    },
  ]

  return (
    <section id="work" ref={(el) => {
      if (typeof ref === 'function') ref(el)
      else if (ref) ref.current = el
      containerRef.current = el
    }} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" data-animate>
          <h2 className="text-3xl sm:text-4xl font-light">
            <VariableProximity
              label="Work Experience"
              fromFontVariationSettings="'wght' 200"
              toFontVariationSettings="'wght' 700"
              containerRef={containerRef}
              radius={150}
              falloff="gaussian"
            />
          </h2>
          <div className="text-sm text-muted-foreground font-mono">2019 — Present</div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              data-animate
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-all duration-500 opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="lg:col-span-2">
                <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {job.year}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {job.role}
                  </h3>
                  <div className="text-muted-foreground">{job.company}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-muted-foreground rounded hover:text-foreground transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

WorkSection.displayName = "WorkSection"

