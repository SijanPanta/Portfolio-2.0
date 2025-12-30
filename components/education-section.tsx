import { Card } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Education & Certifications</h2>
          <div className="h-1 w-12 bg-accent" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border bg-card p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-semibold text-card-foreground">Bachelor's in Computer Science and Information Technology</h3>
                  <p className="text-sm text-muted-foreground">Tribhuvan University, Nepal</p>
                  <p className="text-sm font-medium text-accent">2022 - Present</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-card-foreground/80">
                <p className="font-medium text-card-foreground">Relevant Coursework:</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>Compiler Design & Theory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>Computer Networks & Security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>Database Management Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>Operating Systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">Certifications & Achievements</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="font-medium text-card-foreground">Frontend Training</p>
                  <p className="text-sm text-muted-foreground">Frontend Masters• 2024</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-card-foreground">Node Js </p>
                  <p className="text-sm text-muted-foreground">Code with Mosh • 2025</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-medium text-card-foreground">2nd runnerup in Idea for Impact</p>
                  <p className="text-sm text-muted-foreground">King's College • 2025</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
