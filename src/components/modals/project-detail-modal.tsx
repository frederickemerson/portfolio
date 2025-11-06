"use client"

import Image from "next/image"
import { X } from "lucide-react"

export interface Project {
  title: string
  excerpt: string
  description: string
  tech: string[]
  image: string
}

interface ProjectDetailModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border border-border rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-lg"
            width={800}
            height={400}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light mb-2">{project.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-mono text-muted-foreground mb-3">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

