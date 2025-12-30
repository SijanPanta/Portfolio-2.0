"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextType from './TextType';
import Threads from './Threads';
import Image from 'next/image';
export function HeroSection() {
  return (
    <section className="flex min-h-[82vh] flex-col justify-center py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl"></div>
           <Image src="/profile.JPG" alt="Sijan Panta" fill className="relative rounded-full border-4 border-background shadow-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 flex-1">
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
          IT student from Nepal with hands-on experience in software development, system design, and
          academic projects. I combine technical fundamentals with problem-solving to create practical solutions.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button className="cursor-pointer" variant="default" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
      </div>
    </section>
  )
}
