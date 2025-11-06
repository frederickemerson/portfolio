"use client"

import { forwardRef, useRef } from "react"
import Link from "next/link"
import VariableProximity from "@/components/VariableProximity"

export const CurrentSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLElement>(null)
  const projects = [
    {
      title: "PathRAG Optimization",
      subtitle: "Pruning Graph-Based Retrieval",
      description:
        "Developing advanced pruning algorithms for PathRAG knowledge graphs to reduce computational overhead while maintaining retrieval accuracy. Exploring dynamic graph compression techniques and intelligent node selection strategies for production-scale deployments.",
      status: "In Progress",
      progress: 65,
      tech: ["PathRAG", "Graph Theory", "Python", "Azure OpenAI"],
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "DeFi Stablecoin Platform",
      subtitle: "TON Blockchain Integration",
      description:
        "Building a decentralized stablecoin protocol on The Open Network (TON) with algorithmic stability mechanisms. Implementing smart contracts for collateralization, liquidation systems, and governance—exploring novel approaches to maintaining peg stability in volatile markets.",
      status: "Active Development",
      progress: 45,
      tech: ["TON", "Solidity", "Web3", "DeFi"],
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Choreoify V2",
      subtitle: "AI-Powered Dance Tutorial Generator",
      description:
        "Transforming dance videos into comprehensive tutorials with 3D skeletal models, step-by-step breakdowns, and interactive learning modules. Leveraging YOLOv11 for pose estimation and generating real-time 3D visualizations to make choreography accessible to everyone.",
      status: "Prototyping",
      progress: 30,
      tech: ["YOLOv11", "Three.js", "OpenCV", "React"],
      gradient: "from-orange-500/10 to-red-500/10",
    },
    {
      title: "DigitalDesign",
      subtitle: "Interactive Circuit Learning Platform",
      description:
        "An innovative learning platform simplifying digital design education through interactive simulations and detailed explanations. Employs real-time circuit modelling and step-by-step tutorials to accelerate comprehension and practical application for beginners and enthusiasts.",
      status: "Active",
      progress: 55,
      tech: ["JavaScript", "WebGL", "Python", "Next.js"],
      gradient: "from-green-500/10 to-emerald-500/10",
    },
  ]

  return (
    <section id="current" ref={(el) => {
      if (typeof ref === 'function') ref(el)
      else if (ref) ref.current = el
      containerRef.current = el
    }} className="min-h-screen py-20 sm:py-32 opacity-0">
      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-4" data-animate>
          <h2 className="text-3xl sm:text-4xl font-light">
            <VariableProximity
              label="What I'm Building Now"
              fromFontVariationSettings="'wght' 200"
              toFontVariationSettings="'wght' 700"
              containerRef={containerRef}
              radius={150}
              falloff="gaussian"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Current explorations at the intersection of knowledge graphs, decentralized systems, and computer
            vision—pushing boundaries where they matter.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <article
              key={index}
              data-animate
              className="group relative p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-2xl transition-all duration-1000 ease-out opacity-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              ></div>

              <div className="relative space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <h3 className="text-xl sm:text-2xl font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 text-xs border border-border rounded-full whitespace-nowrap">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      {project.status}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span className="font-mono">{project.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-foreground to-muted-foreground transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-border rounded-full group-hover:border-muted-foreground/50 group-hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          data-animate
          className="p-6 sm:p-8 border border-dashed border-border rounded-lg opacity-0 hover:border-muted-foreground/50 transition-all duration-500"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">More in the Pipeline</h3>
              <p className="text-sm text-muted-foreground">
                Always experimenting with new ideas. Follow along on GitHub to see what&apos;s next.
              </p>
            </div>
            <Link
              href="https://github.com/frederickemerson"
              className="group flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-foreground hover:scale-105 transition-all duration-300"
            >
              <span className="text-sm">View GitHub</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
})

CurrentSection.displayName = "CurrentSection"

