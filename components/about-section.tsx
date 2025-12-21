import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">About Me</h2>
          <div className="h-1 w-12 bg-accent" />
        </div>
        <Card className="border-border bg-card p-8">
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
            <p className="text-accent font-medium">
              My goal is to bridge the gap between academic knowledge and industry practice, building a career in
              software development and system architecture.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
