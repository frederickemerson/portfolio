import type { Project } from "@/components/modals/project-detail-modal"

export const projectsData: Project[] = [
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
    title: "BuildProof",
    excerpt:
      "Comprehensive blockchain-based system for tracking construction material compliance through Digital Product Passports (DPPs) on Solana.",
    description:
      "BuildProof is a comprehensive blockchain-based system for tracking construction material compliance through Digital Product Passports (DPPs). Built on Solana for speed and cost-efficiency, BuildProof enables manufacturers, contractors, and auditors to mint, verify, and trade construction materials as NFTs with embedded Environmental Product Declaration (EPD) data. The platform ensures transparency, traceability, and compliance throughout the construction supply chain.",
    tech: ["Solana", "Blockchain", "NFTs", "Web3", "TypeScript", "React"],
    image: "/buildproof.png",
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

