"use client"

import { forwardRef, useRef } from "react"
import type { Project } from "../modals/project-detail-modal"
import SpotlightCard from "@/components/SpotlightCard"
import { BentoCardGrid } from "@/components/MagicBento"
import VariableProximity from "@/components/VariableProximity"

interface ProjectsSectionProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
}

export const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(({ projects, onProjectClick }, ref) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLElement>(null)
  
  return (
    <section id="projects" ref={(el) => {
      if (typeof ref === 'function') ref(el)
      else if (ref) ref.current = el
      containerRef.current = el
    }} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light" data-animate>
          <VariableProximity
            label="Featured Projects"
            fromFontVariationSettings="'wght' 200"
            toFontVariationSettings="'wght' 700"
            containerRef={containerRef}
            radius={150}
            falloff="gaussian"
          />
        </h2>

        <BentoCardGrid gridRef={gridRef}>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 w-full">
            {projects.map((project, index) => (
              <SpotlightCard
                key={index}
                data-animate
                onClick={() => onProjectClick(project)}
                className="group p-6 sm:p-8 border border-border bg-background hover:border-muted-foreground/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer opacity-0"
                spotlightColor="rgba(132, 0, 255, 0.15)"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">{project.excerpt}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs border border-border rounded-full group-hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>View details</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    {project.links && project.links.length > 0 && (
                      <div className="flex items-center gap-1">
                        {project.links.slice(0, 2).map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded border border-border hover:border-muted-foreground/50 hover:bg-muted/30 transition-all duration-300"
                            aria-label={`Visit ${project.title}`}
                          >
                            <svg
                              className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </BentoCardGrid>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"

