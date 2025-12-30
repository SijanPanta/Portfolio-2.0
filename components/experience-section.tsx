"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, GraduationCap, Award } from "lucide-react"
import CountUp from './CountUp'
import Stack from './Stack'

const images = [
  "/events/DSC04038.jpg",
  "/events/IMG_20241214_093900170~2.jpg",
  // "/events/IMG-20250803-WiA0046.jpg",
  "/events/IMG_0449.JPG",
  "/events/IMG_0482.jpg",
  "/events/IMG_20240929_092327944.jpg",
  "/events/IMG_20250531_112915093.jpg",
  "/events/IMG_20250629_172141947.jpg",
  "/events/IMG_6827.JPG"
];

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
            { label: "Volunteers Managed", value: "30+", icon: Users },
            { label: "Workshops Hosted", value: "10", icon: Award },
            { label: "Students Mentored", value: "200+", icon: GraduationCap },
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
  title: "Fonepay Student Ambassador",
  org: "Fonepay",
  time: "2025 - 2025",
  desc:
    "Representing Fonepay at the campus level by promoting digital payment awareness, assisting in student-focused campaigns, and participating in the FSA Challenge to drive adoption of cashless solutions.",
  tags: ["FinTech", "Digital Payments", "Community Outreach"],
},
{
  title: "IT Club Treasurer",
  org: "ASCOL IT Club",
  time: "2023 - 2024",
  desc:
    "Managed club finances, prepared budget plans for technical events and hackathons, and supported the execution of initiatives such as ASCOL Hackfest by coordinating resources and logistics.",
  tags: ["Budget Management", "Event Coordination", "Team Collaboration"],
},
{
  title: "OSAC Executive Member",
  org: "OSAC",
  time: "2022 - 2023",
  desc:
    "Worked as part of the executive team to support student engagement activities, assist in orientation programs, and act as a bridge between students and academic administration.",
  tags: ["Student Leadership", "Communication", "Event Support"],
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

        {/* Event Gallery */}
        <Card className="border-border bg-card p-8 overflow-hidden">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-card-foreground">Event Gallery</h3>
              <p className="text-card-foreground/70">
                Moments captured from tech events, workshops, and community gatherings
              </p>
            </div>
            
            <div className="flex justify-center items-center py-8">
              <div className="relative" style={{ width: 320, height: 320 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-3xl" />
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={true}
                  cards={images.map((src, i) => (
                    <div 
                      key={i}
                      className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-background ring-2 ring-accent/20"
                    >
                      <img 
                        src={src} 
                        alt={`Event ${i + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                />
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground italic">
              Click and drag to explore • Tap to cycle through photos
            </p>
          </div>
        </Card>

      </div>
    </section>
  )
}