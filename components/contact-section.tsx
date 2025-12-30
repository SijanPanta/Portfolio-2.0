import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Get in Touch</h2>
          <div className="h-1 w-12 bg-accent" />
          <p className="text-muted-foreground">Interested in collaborating or have a question? Let's connect.</p>
        </div>
        <Card className="border-border bg-card p-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-pretty text-lg leading-relaxed text-card-foreground">
                I'm always open to discussing new opportunities, technical collaborations, or answering questions about
                my work. Whether you're a recruiter, fellow student, or just want to chat about technology—feel free to
                reach out.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2" asChild>
                  <a href="mailto:cjan1102@gmail.com">
                    <Mail className="h-4 w-4" />
                    cjan1102@gmail.com
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                  <a href="https://www.linkedin.com/in/sijan-panta/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                  <a href="https://github.com/sijanpanta" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                📍 Based in Nepal • 🎓 Available for internships and part-time opportunities • 💼 Open to remote
                collaborations
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
