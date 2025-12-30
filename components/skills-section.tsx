import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import LogoLoop from './LogoLoop';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,SiMysql
} from 'react-icons/si';
const techLogos = [

  { node: <SiReact />, title: "React", href: "https://react.dev" },

  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },

  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },

  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMysql />, title: "Tailwind CSS", href: "https://tailwindcss.com" },

];


// Alternative with image sources


const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "JavaScript", "C#", "SQL"],
  },
  {
    category: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Compiler Design",
      "Computer Networks",
      "Operating Systems",
      "Database Systems",
      "Cryptography & Security",
    ],
  },
  {
    category: "Development Tools",
    skills: ["Git & GitHub", "Linux/Unix", "VS Code",  "Postman","Vim"],
  },
  {
    category: "Technologies & Frameworks",
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs","Next.js","Tailwind CSS" ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="pt-20">
      <div className="space-y-8 mb-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills & Expertise</h2>
          <div className="h-1 w-12 bg-accent" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.category} className="border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>





      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>

        {/* Basic horizontal loop */}

        <LogoLoop

          logos={techLogos}

          speed={120}

          direction="left"

          logoHeight={48}

          gap={40}

          hoverSpeed={0}

          scaleOnHover

          ariaLabel="Technology partners"

        />





      </div>


    </section>
  )
}
