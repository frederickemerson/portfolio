"use client"

import { forwardRef } from "react"
import type { Project } from "../modals/project-detail-modal"

interface ProjectsSectionProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
}

export const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(({ projects, onProjectClick }, ref) => {
  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light" data-animate>
          Featured Projects
        </h2>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              data-animate
              onClick={() => onProjectClick(project)}
              className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer opacity-0"
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

                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 pt-2">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"

