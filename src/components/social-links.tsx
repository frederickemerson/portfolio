"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function SocialLinks() {
  const socials = [
    { icon: Github, href: "https://github.com/frederickemerson", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/frederickamalemerson", label: "LinkedIn" },
    { icon: Mail, href: "mailto:frederick82004@gmail.com", label: "Email" },
  ]

  return (
    <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
      {socials.map((social, index) => {
        const IconComponent = social.icon
        return (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:border-foreground hover:scale-110 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            aria-label={social.label}
          >
            <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
          </Link>
        )
      })}
    </aside>
  )
}

