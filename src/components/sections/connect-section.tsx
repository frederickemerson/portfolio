"use client"

import { forwardRef } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export const ConnectSection = forwardRef<HTMLElement>((props, ref) => {
  const socials = [
    {
      name: "GitHub",
      handle: "@frederickemerson",
      url: "https://github.com/frederickemerson",
      icon: Github,
    },
    {
      name: "LinkedIn",
      handle: "frederickamalemerson",
      url: "https://www.linkedin.com/in/frederickamalemerson",
      icon: Linkedin,
    },
    { name: "Telegram", handle: "@crownedether", url: "https://t.me/crownedether", icon: Send },
    { name: "Gmail", handle: "frederick82004@gmail.com", url: "mailto:frederick82004@gmail.com", icon: Mail },
  ]

  return (
    <section id="connect" ref={ref} className="py-20 sm:py-32 opacity-0">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8" data-animate>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
              <span className="text-xs font-mono text-muted-foreground">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Let&apos;s Connect</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Open to internships, research opportunities, and collaborations in AI, web development, and systems
              programming.
            </p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8" data-animate>
          <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {socials.map((social, index) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors duration-300">
                      <IconComponent className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
})

ConnectSection.displayName = "ConnectSection"

