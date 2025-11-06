"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { Trophy } from "lucide-react"
import { Starfield } from "@/components/starfield"
import { ProgressBar } from "@/components/progress-bar"
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { Footer } from "@/components/footer"
import { IntroSection } from "@/components/sections/intro-section"
import { AboutSection } from "@/components/sections/about-section"
import { RolesSection } from "@/components/sections/roles-section"
import { CurrentSection } from "@/components/sections/current-section"
import { WorkSection } from "@/components/sections/work-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { AchievementsModal } from "@/components/modals/achievements-modal"
import { ProjectDetailModal, type Project } from "@/components/modals/project-detail-modal"
import { projectsData } from "@/data/projects"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("")
  const [showAchievements, setShowAchievements] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const isDark = theme === "dark" || theme === undefined

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)

            // Stagger child animations
            const children = entry.target.querySelectorAll("[data-animate]")
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-fade-in-up")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleProjectClick = (project: Project) => {
    // Disable modal on mobile devices (screens smaller than 1024px)
    if (window.innerWidth >= 1024) {
      setSelectedProject(project)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Starfield />
      <ProgressBar />

      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + 0}% ${50 + 0}%, var(--muted) 0%, transparent 50%)`,
          transition: "background 0.3s ease-out",
        }}
      />

      <button
        onClick={() => setShowAchievements(true)}
        className="fixed left-8 bottom-8 z-20 group p-4 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:border-foreground hover:scale-110 hover:shadow-lg transition-all duration-300 hidden lg:flex items-center gap-2"
        aria-label="View Achievements"
      >
        <Trophy className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
          Achievements
        </span>
      </button>

      <SocialLinks />
      <Navigation activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <IntroSection isDark={isDark} ref={(el) => { sectionsRef.current[0] = el }} />
        <AboutSection ref={(el) => { sectionsRef.current[1] = el }} />
        <RolesSection ref={(el) => { sectionsRef.current[2] = el }} />
        <CurrentSection ref={(el) => { sectionsRef.current[3] = el }} />
        <WorkSection ref={(el) => { sectionsRef.current[4] = el }} />
        <ProjectsSection projects={projectsData} onProjectClick={handleProjectClick} ref={(el) => { sectionsRef.current[5] = el }} />
        <ConnectSection ref={(el) => { sectionsRef.current[6] = el }} />
        <Footer isDark={isDark} toggleTheme={toggleTheme} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>

      <AchievementsModal isOpen={showAchievements} onClose={() => setShowAchievements(false)} />
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
