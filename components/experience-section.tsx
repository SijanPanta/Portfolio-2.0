"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, GraduationCap, Award } from "lucide-react"
import CountUp from './CountUp'
export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Experience <span className="text-accent">&amp;</span> Leadership
            </h2>
            <div className="h-1 w-12 bg-accent" />
            <p className="text-muted-foreground max-w-2xl">
              Driving community growth and technical innovation through active
              leadership, mentorship, and engagement in the global tech ecosystem.
            </p>
          </div>
            <Button variant="default" size="lg" className="hidden md:inline-flex" >
           <a href="/Sijan-Panta-cv.pdf" download>Download Resume</a>

          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Volunteers Managed", value: "15+", icon: Users },
            { label: "Workshops Hosted", value: "10", icon: Award },
            { label: "Students Mentored", value: "50+", icon: GraduationCap },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="relative flex flex-col gap-3 border-border bg-card p-6 overflow-hidden group hover:border-accent transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-16 h-16 text-accent" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-foreground relative z-10">
                <CountUp

  from={0}

  to={parseInt(stat.value.replace("+", ""))}

  separator=","

  direction="up"

  duration={2}

  className="count-up-text"

/>
              </p>
            </Card>
          ))}
        </div>

        

        {/* Timeline */}
        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          {[
            {
              title: "Microsoft Student Ambassador",
              org: "Global Reach",
              time: "Jan 2023 - Present",
              desc:
                "Actively promoting technology adoption and digital literacy among students. Organizing Azure and cloud workshops.",
              tags: ["Azure", "Public Speaking", "Community Building"],
            },
            {
              title: "University IT Club President",
              org: "University Tech Club",
              time: "Aug 2021 - Dec 2022",
              desc:
                "Led a student organization of 100+ members and organized annual hackathons.",
              tags: ["Leadership", "Budgeting", "Event Planning"],
            },
            {
              title: "Volunteer Tech Mentor",
              org: "Community Center",
              time: "Jun 2021 - Aug 2021",
              desc:
                "Taught Python basics to underprivileged students using simplified curriculum.",
              tags: ["Python", "Mentoring", "Education"],
            },
          ].map((item, index) => (
            <div key={index} className="relative md:pl-20">
              <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background hidden md:block" />
              
              <Card className="border-border bg-card p-6 transition-all hover:border-accent">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="text-accent font-medium">{item.org}</p>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                      <Calendar className="w-3 h-3" />
                      {item.time}
                    </Badge>
                  </div>

                  <p className="text-card-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-secondary/50 text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Card className="border-border bg-gradient-to-r from-accent/5 to-transparent p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Ready to collaborate?</h3>
              <p className="text-muted-foreground">
                I'm always open to new projects and leadership opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="md:hidden">
                Download Resume
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}