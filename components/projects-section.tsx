import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "C Compiler Parser",
    description:
      "Built a lexical analyzer and parser for a subset of C language, implementing tokenization and syntax tree generation using flex and bison.",
    problem: "Understanding compiler construction through hands-on implementation",
    solution: "Implemented lexer and parser phases with error handling",
    outcome: "Gained deep understanding of compiler fundamentals and parsing techniques",
    technologies: ["C", "Flex", "Bison", "Data Structures"],
  },
  {
    title: "Cryptographic Security Suite",
    description:
      "Developed encryption and decryption programs implementing classic ciphers (Caesar, Vigenère) and modern algorithms (AES) with key management.",
    problem: "Practical implementation of cryptographic algorithms",
    solution: "Created modular encryption library with multiple cipher support",
    outcome: "Enhanced understanding of security principles and implementation",
    technologies: ["Python", "Cryptography", "Security", "Algorithms"],
  },
  {
    title: "Network Packet Analyzer",
    description:
      "Simulated network traffic analysis tool that captures and analyzes packets, displaying protocol information and statistics.",
    problem: "Understanding network protocols and packet structures",
    solution: "Built packet capture and analysis system with protocol parsing",
    outcome: "Comprehensive knowledge of TCP/IP stack and network security",
    technologies: ["Python", "Networking", "Socket Programming", "Wireshark"],
  },
  {
    title: "Student Management System",
    description:
      "Full-stack web application for managing student records, attendance, and grades with role-based access control.",
    problem: "Streamlining academic record management",
    solution: "Built CRUD application with authentication and authorization",
    outcome: "Deployed system used by student organization",
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Projects</h2>
          <div className="h-1 w-12 bg-accent" />
          <p className="text-muted-foreground">
            Academic and personal projects demonstrating problem-solving and technical skills
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col border-border bg-card p-6 transition-all hover:border-accent"
            >
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-card-foreground/80">{project.description}</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-card-foreground">Problem:</span>{" "}
                    <span className="text-card-foreground/70">{project.problem}</span>
                  </div>
                  <div>
                    <span className="font-medium text-card-foreground">Solution:</span>{" "}
                    <span className="text-card-foreground/70">{project.solution}</span>
                  </div>
                  <div>
                    <span className="font-medium text-accent">Outcome:</span>{" "}
                    <span className="text-card-foreground/70">{project.outcome}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-border text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
