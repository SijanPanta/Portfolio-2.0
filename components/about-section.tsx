"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, GraduationCap, Target, Sparkles, BookOpen, Users } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "IT & Business Student",
      description: "Building strong fundamentals in computer science and system architecture"
    },
    {
      icon: Code2,
      title: "Hands-on Builder",
      description: "Creating practical solutions through projects and real-world applications"
    },
    {
      icon: Sparkles,
      title: "Community Leader",
      description: "Contributing to tech communities and helping peers grow"
    },
    {
      icon: Target,
      title: "Future-Focused",
      description: "Bridging academic knowledge with industry practice"
    }
  ]

  const skills = [
    "C Programming",
    "Compiler Design",
    "Networking",
    "Security",
    "Mobile Development",
    "System Architecture"
  ]

  return (
    <section id="about" className="py-20">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">About Me</h2>
          <div className="h-1 w-12 bg-accent" />
          <p className="text-muted-foreground">
            Student, developer, and tech enthusiast from Nepal
          </p>
        </div>

        {/* Main Description Card */}
        <Card className="border-border bg-card p-8 hover:border-accent transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 delay-75">
          <div className="space-y-6 text-pretty leading-relaxed text-card-foreground/90">
            <p>
              I'm currently pursuing my studies in IT and business, with a deep focus on understanding how systems work
              from the ground up. My academic journey has given me strong fundamentals in computer science, including C
              programming, compiler design concepts, networking, and security.
            </p>
            <p>
              Beyond coursework, I actively engage in building practical projects—from parsers and cryptographic
              programs to mobile applications and system simulations. I believe in learning by doing, which is why I
              focus on creating solutions that address real problems.
            </p>
            <p>
              I'm passionate about explaining complex technical concepts clearly, whether it's for exam preparation or
              real-world application. I also contribute to tech communities through leadership roles and student
              initiatives, helping peers grow while expanding my own understanding.
            </p>
            <div className="flex items-start gap-2 pt-2">
              <Target className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-accent font-medium">
                My goal is to bridge the gap between academic knowledge and industry practice, building a career in
                software development and system architecture.
              </p>
            </div>
          </div>
        </Card>

        {/* Highlight Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Card
              key={item.title}
              className="relative border-border bg-card p-6 group hover:border-accent transition-all overflow-hidden h-full animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${150 + index * 50}ms` }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon className="w-16 h-16 text-accent" />
              </div>
              <div className="relative space-y-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-card-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
