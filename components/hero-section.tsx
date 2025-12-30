"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextType from './TextType';
import Threads from './Threads';

export function HeroSection() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Hello, I'm</p>
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Sijan Panta
          </h1>
          <TextType 
          text={["Student","Frontend Developer","Learner" ]}
            typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          />
        </div>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">
          IT and business student from Nepal with hands-on experience in software development, system design, and
          academic projects. I combine technical fundamentals with problem-solving to create practical solutions.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
