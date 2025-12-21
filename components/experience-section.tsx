import { Card } from "@/components/ui/card"
import { Users, Award, Calendar } from "lucide-react"

const experiences = [
  {
    icon: Users,
    title: "Tech Community Lead",
    organization: "University Tech Club",
    period: "2023 - Present",
    description:
      "Leading technical workshops and coding sessions for 100+ students. Organized hackathons and invited industry speakers to share real-world insights.",
    achievements: [
      "Increased club membership by 60%",
      "Organized 3 successful hackathons",
      "Conducted weekly coding workshops",
    ],
  },
  {
    icon: Award,
    title: "Student Ambassador",
    organization: "Tech Education Initiative",
    period: "2023 - 2024",
    description:
      "Represented the university at tech events and conferences. Mentored junior students in programming fundamentals and career guidance.",
    achievements: [
      "Mentored 25+ students in programming",
      "Represented at 5 regional tech conferences",
      "Created study resources for C programming",
    ],
  },
  {
    icon: Calendar,
    title: "Event Coordinator",
    organization: "Annual Tech Symposium",
    period: "2024",
    description:
      "Coordinated logistics and technical arrangements for university tech symposium with 500+ attendees. Managed speaker sessions and workshop schedules.",
    achievements: [
      "Successfully organized event with 500+ attendees",
      "Coordinated 15+ technical workshops",
      "Secured sponsorships worth $5000+",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Experience & Leadership</h2>
          <div className="h-1 w-12 bg-accent" />
          <p className="text-muted-foreground">Contributing to tech communities and leading student initiatives</p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp) => {
            const Icon = exp.icon
            return (
              <Card key={exp.title} className="border-l-4 border-l-accent bg-card p-6 transition-all hover:shadow-md">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      <p className="text-sm font-medium text-accent">{exp.period}</p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-card-foreground/80">{exp.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-card-foreground">Key Achievements:</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-card-foreground/70">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
