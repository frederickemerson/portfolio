"use client"

import { Award, BookOpen, Code, Star, Trophy, Users, X } from "lucide-react"

interface AchievementsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AchievementsModal({ isOpen, onClose }: AchievementsModalProps) {
  if (!isOpen) return null

  const achievements = [
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
  ]

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
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
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, index) => {
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
  )
}

