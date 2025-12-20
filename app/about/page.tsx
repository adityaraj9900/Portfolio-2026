import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Briefcase, GraduationCap, Award } from "lucide-react"

export default function About() {
  const skills = {
    frontend: ["React.js", "Vue.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Three.js", "GSAP"],
    backend: ["Node.js", "Express.js", "Laravel", "PHP", "REST APIs", "JWT", "PrestaShop"],
    database: ["MySQL", "MongoDB", "Eloquent ORM"],
    aiml: ["Python", "OpenCV", "YOLOv5", "Mediapipe", "Scikit-learn", "Pandas"],
    tools: ["Git", "Docker", "Postman", "VS Code", "Vercel", "Netlify", "Render"],
  }

  const experience = [
    {
      company: "OGA Business Solutions",
      role: "Software Development Engineer 1",
      period: "Jan 2025 - Present",
      location: "Noida",
      highlights: [
        "Leading development of enterprise-level CRM platform with 15+ integrated modules using Vue.js and Laravel",
        "Building custom REST APIs and full-stack client websites with HTML, CSS, PHP, React.js, and Tailwind CSS",
        "Managing MySQL databases and PrestaShop integrations for e-commerce solutions serving 500+ daily users",
        "Architecting scalable, responsive interfaces and optimizing full-stack performance",
      ],
    },
    {
      company: "Stunhaul Private Limited",
      role: "Web Developer Intern",
      period: "Jun 2024 - Dec 2024",
      location: "Mohali, Punjab",
      highlights: [
        "Developed responsive web applications using MERN stack",
        "Implemented RESTful APIs, improving scalability by 20%",
        "Utilized Tailwind CSS and Bootstrap, reducing UI development time by 15%",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sharda University",
      location: "Noida",
      period: "Aug 2021 - May 2025",
      cgpa: "8.61 CGPA",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Button asChild variant="ghost" className="mb-6 sm:mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-4 mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">About Me</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            I'm a Software Development Engineer passionate about creating efficient, scalable, and user-friendly
            applications. I solve real-world problems using modern web technologies and have a strong foundation in data
            structures and algorithms.
          </p>
        </div>

        {/* Experience */}
        <section className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 hover:shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-br from-card via-card to-primary/5"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
                    <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm sm:text-base text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.cgpa}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{edu.period}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="p-2 bg-gradient-to-br from-secondary to-accent rounded-lg">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items], idx) => {
              const gradients = [
                "from-primary/10 to-secondary/5",
                "from-secondary/10 to-accent/5",
                "from-accent/10 to-primary/5",
                "from-primary/5 to-accent/10",
                "from-secondary/5 to-primary/10",
              ]
              return (
                <Card
                  key={category}
                  className={`p-4 sm:p-6 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br ${gradients[idx % gradients.length]}`}
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 capitalize">
                    {category.replace("aiml", "AI/ML")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs sm:text-sm hover:scale-110 transition-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
