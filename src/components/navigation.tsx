"use client"

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {["intro", "about", "roles", "current", "work", "projects", "connect"].map((section) => (
          <button
            key={section}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              activeSection === section
                ? "bg-foreground scale-110"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-105"
            }`}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </div>
    </nav>
  )
}

