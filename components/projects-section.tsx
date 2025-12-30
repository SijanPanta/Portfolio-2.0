import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
{
  title: "Web Calculator",
  description:
    "Developed a responsive web calculator using HTML, CSS, and JavaScript with a clean and intuitive interface for basic arithmetic operations.",
  problem: "Need for a simple cross-platform utility to perform quick calculations.",
  solution: "Built a fully responsive calculator web app with real-time interactive buttons and smooth UI.",
  outcome: "Strengthened core JavaScript fundamentals and DOM manipulation skills.",
  technologies: ["HTML", "CSS", "JavaScript"],
  code: "https://github.com/SijanPanta/calculatorWeb",
  deployed:"https://sijanpanta.github.io/calculatorWeb/"
},
{
  title: "WordleMe",
  description:
    "A browser-based word guessing game inspired by Wordle, featuring real-time feedback, validation, and game state handling.",
  problem: "Understanding interactive game logic and UI state management in frontend development.",
  solution: "Implemented dynamic game logic, input validation, and visual feedback using vanilla JavaScript.",
  outcome: "Improved understanding of state management and user interaction patterns.",
  technologies: ["HTML", "CSS", "JavaScript"],
  code: "https://github.com/SijanPanta/WordleMe",
deployed:"https://wordle.sijanpanta.com.np"
},
{
  title: "ASCOL IT Club Website & Event Systems",
  description:
    "Developed and maintained web systems for ASCOL IT Club, including event promotion, registration flows, and content updates for initiatives like Hackfest.",
  problem: "Need for a centralized digital presence to manage IT club activities and events.",
  solution: "Built responsive pages and components to showcase events, manage information, and improve student engagement.",
  outcome: "Gained real-world experience working with teams, deadlines, and production-level frontend code.",
  technologies: ["React", "Tailwind CSS", "JavaScript", "Git", "Team Collaboration"],
  code: "https://github.com/SijanPanta/IT-Club-Website",
  deployed:"https://ascolitclub.com"
},
{
  title: "MOOL – Tech-Enabled Social Enterprise Marketplace",
  description:
    "A platform designed to empower Nepali communities by enabling the sale of local products, cultural storytelling, and sustainable tourism experiences.",
  problem: "Local communities lack digital platforms to showcase and monetize cultural products and experiences.",
  solution: "Designed a scalable marketplace concept combining e-commerce, storytelling, and impact tracking.",
  outcome: "Developed product-thinking skills and experience in building socially impactful tech solutions.",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "System Design"],
  code: "https://github.com/SijanPanta/MOOL",
  deployed:"https://mool.sijanpanta.com.np"
}


]

export function ProjectsSection() {
  return (
    <section id="projects">
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
                  <a href={project.code} target="_blank" rel="noopener noreferrer">Source Code</a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <a href={project.deployed} target="_blank" rel="noopener noreferrer">Deployed Link</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
