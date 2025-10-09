"use client"

import Link from "next/link"
import Image from "next/image" // Added import for next/image
import { useEffect, useRef, useState } from "react"
import {
  Users,
  Briefcase,
  Zap,
  Target,
  Github,
  Linkedin,
  ArrowUpRight,
  Mail,
  ExternalLink,
  Award,
  X,
  Trophy,
  Star,
  Code,
  BookOpen,
  Send,
} from "lucide-react"

type Project = {
  title: string
  excerpt: string
  description: string
  tech: string[]
  image: string
}

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; vx: number; vy: number; opacity: number }[] = []
    const starCount = 100

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-20" />
}

export default function Home() {
  
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showAchievements, setShowAchievements] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    setIsDark(!isDark)
  }

  const projectsData: Project[] = [
    {
      title: "Choreoify",
      excerpt:
        "Real-time choreography replication using YOLOv11 for skeletal tracking and OpenCV for pose estimation, achieving synchronized performance across multiple dancers.",
      description:
        "Developed real-time choreography replication system using YOLOv11 for skeletal tracking and OpenCV for pose estimation, analyzing dance movements to map them across multiple dancers with spatial transformations. Optimized frame processing with Librosa, SciPy, and NumPy, achieving synchronized performance and ultra-precise movement detection for enhanced group coordination.",
      tech: ["YOLOv11", "OpenCV", "Python", "Librosa", "SciPy", "NumPy"],
      image: "/dance-choreography-tracking-system.jpg",
    },
    {
      title: "Conceptify",
      excerpt:
        "Full-stack learning tracker with Duolingo-like streak system, featuring custom auth, interactive UI with drawing capabilities, and daily concept logging.",
      description:
        "Built full-stack learning tracker app using Next.js, Next Auth, and TRPC, enabling daily concept logging with Duolingo-like streak system for consistent habit building. Integrated Nodemailer for custom auth and notifications and Framer Motion for interactive UI, allowing users to draw and write notes, enhancing personal knowledge retention through self-developed end-to-end features.",
      tech: ["Next.js", "TRPC", "Drizzle", "Framer Motion", "Next Auth", "Nodemailer"],
      image: "/conceptify.png",
    },
    {
      title: "FlashBang",
      excerpt:
        "Productivity spotlight search utility in Tauri supporting customizable bangs for rapid web searches, file access, and script execution.",
      description:
        "Created productivity-enhancing spotlight search utility in Tauri, JavaScript, and Rust, supporting customizable bangs for rapid web searches, file access, and script execution. Delivered unified interface with predefined commands, streamlining workflow integration and boosting user efficiency through seamless shortcuts.",
      tech: ["Tauri", "Rust", "JavaScript"],
      image: "/flashbang.png",
    },
    {
      title: "FredLikesToRant",
      excerpt:
        "Technical blog breaking down complex concepts into accessible explanations for non-programmers with engaging written content.",
      description:
        "Personal blog focused on breaking down complex technical concepts into accessible explanations for non-programmers. Features engaging written content that translates programming jargon into everyday language, making technology approachable for everyone.",
      tech: ["Next.js", "React.js", "PostgreSQL", "Cloudflare R2", "Neon", "Drizzle", "Spotify API"],
      image: "/fltr.png",
    },
    {
      title: "Personal Finance Automation",
      excerpt: "Secure transaction monitoring with ML for automatic expense categorization and anomaly detection.",
      description:
        "Secure transaction monitoring system with machine learning for automatic expense categorization and anomaly detection. Features custom rule engine for transaction routing and automated report generation, helping users maintain financial awareness effortlessly.",
      tech: ["Gmail API", "Notion API", "Vercel", "PostgreSQL", "Python", "End-to-end encryption"],
      image: "/notion.png",
    },
    {
      title: "Emotion-Based Music Recommender",
      excerpt:
        "Advanced recommendation engine with NLTK for lyric sentiment analysis and Librosa for audio extraction, featuring Arduino-controlled lighting.",
      description:
        "Developed an advanced recommendation engine in Python and TensorFlow with NLTK for lyric sentiment analysis and Librosa for audio extraction, matching emotional patterns via NLP. Incorporated collaborative filtering and user feedback loops, improving accuracy and personalization in music suggestions through Spotify API integration.",
      tech: ["TensorFlow", "NLTK", "Spotify API", "Arduino", "Python", "Librosa"],
      image: "/music-recommendation-emotion-analysis.jpg",
    },
    {
      title: "Spotencify",
      excerpt:
        "Music discovery tool converting sentences into playlists via exact phrase matching with Spotify API, featuring rate-limited requests and chunk-based processing.",
      description:
        "Implemented music discovery tool with Next.js, TypeScript, Node.js, React, and Framer Motion integrated with Spotify API, converting sentences into playlists via exact phrase matching. Utilized rate-limited requests, in-memory caching, and chunk-based processing, ensuring strict matching with coverage metrics and reducing unmatched words for large inputs.",
      tech: ["Next.js", "TypeScript", "Spotify API", "React", "Framer Motion"],
      image: "/spotencify.png",
    },
    {
      title: "Cloud-Controlled IoT Vehicle",
      excerpt:
        "Low-latency remote control system with custom communication protocols, incorporating dead reckoning and predictive movement algorithms.",
      description:
        "Built low-latency remote control system on FRDM KL25Z Arm Chip, ESP-32, and RTOS with custom communication protocols, incorporating dead reckoning for connection drops. Implemented predictive movement algorithms and fail-safe mechanisms, ensuring efficient telemetry transmission and reliable operation during disruptions.",
      tech: ["C++", "FRDM KL25Z", "ESP-32", "RTOS", "HDL Programming"],
      image: "/iot-vehicle-remote-control.jpg",
    },
  ]

  const handleProjectClick = (project: Project) => {
    // Disable modal on mobile devices (screens smaller than 1024px)
    if (window.innerWidth >= 1024) {
      setSelectedProject(project)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Starfield />

      <div className="fixed top-0 left-0 right-0 h-1 bg-border/30 z-50">
        <div
          className="h-full bg-gradient-to-r from-foreground to-muted-foreground transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

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

      <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        {[
          { icon: Github, href: "https://github.com/frederickemerson", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/frederickamalemerson", label: "LinkedIn" },
          { icon: Mail, href: "mailto:frederick82004@gmail.com", label: "Email" },
        ].map((social, index) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:border-foreground hover:scale-110 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
          </Link>
        ))}
      </aside>

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

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el }} // Fixed ref
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2" data-animate>
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Frederick
                  <br />
                  <span className="text-muted-foreground">Amal Emerson</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md" data-animate>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  A pragmatic idealist who believes the best way to predict the future is to architect it,{" "}
                  <span className="text-foreground">one commit at a time</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
                    Open to opportunities
                  </div>
                  <button
                  onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-white"
                  style={{
                    background: isDark ? "hsl(var(--background))" : "hsl(var(--background))",
                    boxShadow: isDark
                      ? "8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)"
                      : "8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.9)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = isDark
                      ? "4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.05)"
                      : "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.9)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = isDark
                      ? "8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)"
                      : "8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.9)"
                  }}
                >
                  <span className="font-medium">Let&apos;s Connect</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button> 
              </div>


              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0" data-animate>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">CTO & Developer</div>
                  <div className="text-muted-foreground">@ Tuition Kaki</div>
                  <div className="text-xs text-muted-foreground">Jan 2025 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">EDUCATION</div>
                <div className="space-y-2">
                  <div className="text-foreground">National University of Singapore</div>
                  <div className="text-sm text-muted-foreground">Computer Engineering (Hons.)</div>
                  <div className="text-sm text-muted-foreground">Minor in Nano Science</div>
                  <div className="text-xs text-muted-foreground">Batch 2027</div>
                  <div className="text-xs text-foreground mt-2">NUS Science & Technology Scholar</div>
                </div>
              </div>
              <div className="space-y-4"></div>
            </div>
          </div>
        </header>

        <section
          id="about"
          ref={(el) => { sectionsRef.current[1] = el }} // Fixed ref
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light" data-animate>
              About Me
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
              <div className="space-y-6" data-animate>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Less interested in what&apos;s hyped, more obsessed with what actually works.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  I like building stuff that helps me and the people around me solve problems. It doesn&apos;t have to be
                  world-changing—sometimes the best solutions are the ones that make someone&apos;s Tuesday a little less
                  frustrating.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Whether it&apos;s a ticket scanner that processes thousands of entries without breaking a sweat, a learning
                  tracker that actually makes you want to log your progress, or a text-to-SQL system that turns natural
                  language into database queries—I&apos;m drawn to projects where the impact is tangible and immediate.
                </p>
              </div>

              <div className="space-y-6" data-animate>
                <p className="text-base text-muted-foreground leading-relaxed">
                  My approach is simple: understand the problem deeply, prototype quickly, iterate based on real
                  feedback, and ship something that people will actually use. No unnecessary complexity, no chasing
                  trends for the sake of it.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  I&apos;ve worked across the stack—from bare-metal embedded systems to full-stack web apps, from computer
                  vision models to database architectures. This breadth isn&apos;t about collecting buzzwords; it&apos;s about
                  having the right tool for each problem.
                </p>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Just do it for its own sake. Do it for the love of the game.&quot; - Bruce Pandolfini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="roles"
          ref={(el) => { sectionsRef.current[2] = el }} // Fixed ref
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" data-animate>
              <h2 className="text-3xl sm:text-4xl font-light">Current Roles</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
                <span className="text-sm text-muted-foreground font-mono">ACTIVE</span>
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
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
              ].map((role, index) => {
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

        <section
          id="current"
          ref={(el) => { sectionsRef.current[3] = el }} // Fixed ref
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-4" data-animate>
              <h2 className="text-3xl sm:text-4xl font-light">What I&apos;m Building Now</h2>
              <p className="text-muted-foreground max-w-2xl">
                Current explorations at the intersection of knowledge graphs, decentralized systems, and computer
                vision—pushing boundaries where they matter.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {[
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
              ].map((project, index) => (
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

        <section
          id="work"
          ref={(el) => { sectionsRef.current[4] = el }} // Fixed ref
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" data-animate>
              <h2 className="text-3xl sm:text-4xl font-light">Work Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — Present</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
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
              ].map((job, index) => (
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

        <section
          id="projects"
          ref={(el) => { sectionsRef.current[5] = el }} // Fixed ref
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light" data-animate>
              Featured Projects
            </h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {projectsData.map((project, index) => (
                <article
                  key={index}
                  data-animate
                  onClick={() => handleProjectClick(project)}
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

        <section id="connect" ref={(el) => { sectionsRef.current[6] = el }} className="py-20 sm:py-32 opacity-0">
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
                {[
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
                  { name: "Gmail", handle: "frederick82004@gmail.com",url: "mailto:frederick82004@gmail.com", icon: Mail },

                ].map((social, index) => {
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

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Frederick Amal Emerson. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Computer Engineering @ NUS</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 hover:scale-110 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>

      {showAchievements && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAchievements(false)}
        >
          <div
            className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-foreground" />
                <h2 className="text-2xl font-light">Achievements</h2>
              </div>
              <button
                onClick={() => setShowAchievements(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Code,
                  title: "Ex-Lead Tech Developer",
                  description: "Asia Pacific Analytics Club",
                },
                {
                  icon: Award,
                  title: "Atlas Fellowship Finalist",
                  description: "Received $1,000 as funding for higher-education",
                },
                {
                  icon: BookOpen,
                  title: "80+ ML & AI Courses",
                  description:
                    "Including AI Engineering Professional Certificate from IBM, Google Cloud Professional Certificate, and Machine Learning Specialization from Stanford",
                },
                {
                  icon: Star,
                  title: "18+ Skill Badges",
                  description: "From Qwiklabs by learning and solving various Cloud and ML in Cloud problems",
                },
                {
                  icon: Trophy,
                  title: "Google Cloud Challenges Winner",
                  description: "Winner of multiple Google Cloud challenges",
                },
                {
                  icon: Award,
                  title: "Top 10 in Cloud Storage Quiz",
                  description: "Cloud Storage Quizzing Challenge-2 by KONFHUB",
                },
                {
                  icon: Users,
                  title: "School Oratory Club Leader",
                  description: "Consistently bagged the prestigious first prize",
                },
              ].map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-muted/30">
                      <IconComponent className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background border border-border rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image // Replaced img with Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-lg"
                width={800} // Example width/height; adjust based on image
                height={400}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light mb-2">{selectedProject.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-3">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => (
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
      )}
    </div>
  )
}