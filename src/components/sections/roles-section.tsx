"use client"

import { forwardRef } from "react"
import { Briefcase, Target, Users, Zap } from "lucide-react"

export const RolesSection = forwardRef<HTMLElement>((props, ref) => {
  const roles = [
    {
      title: "Volunteer Management Head",
      organization: "NUS Project Silverlight",
      description:
        "Leading and coordinating 50+ volunteers in community service initiatives, organizing weekly activities and ensuring impactful engagement with elderly residents across Singapore.",
      scope: "50+ volunteers",
      icon: Users,
    },
    {
      title: "Tech Lead",
      organization: "NUS Fintech Society",
      description:
        "Driving technical direction and innovation for fintech projects, mentoring members in blockchain and financial technology, and architecting solutions for real-world financial challenges.",
      scope: "Technical Leadership",
      icon: Briefcase,
    },
    {
      title: "Frontend Head",
      organization: "Eusoff Hall",
      description:
        "Spearheading frontend development initiatives, building scalable web applications for hall operations, and leading a team of developers in creating user-centric digital solutions.",
      scope: "Development Team",
      icon: Zap,
    },
    {
      title: "Logistics Head",
      organization: "Eusoff Elderly Service",
      description:
        "Managing operational logistics for elderly service programs, coordinating meal deliveries, organizing engagement activities, and ensuring seamless execution of community outreach.",
      scope: "Operations",
      icon: Target,
    },
  ]

  return (
    <section id="roles" ref={ref} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" data-animate>
          <h2 className="text-3xl sm:text-4xl font-light">Current Roles</h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span className="text-sm text-muted-foreground font-mono">ACTIVE</span>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {roles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <article
                key={index}
                data-animate
                className="group relative p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-2xl transition-all duration-500 opacity-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-muted/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg border border-border bg-muted/30 group-hover:border-foreground/50 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-5 h-5 text-foreground" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {role.title}
                        </h3>
                      </div>
                      <div className="text-sm text-muted-foreground">{role.organization}</div>
                    </div>
                    <div className="px-3 py-1 text-xs border border-border rounded-full whitespace-nowrap">
                      {role.scope}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">{role.description}</p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Active Role</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
})

RolesSection.displayName = "RolesSection"

