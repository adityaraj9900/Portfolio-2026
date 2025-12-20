import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Award, Briefcase } from "lucide-react"
import { ThreeScene } from "@/components/three-scene"
import { TechStack } from "@/components/tech-stack"
import { LeetCodeStats } from "@/components/leetcode-stats"

export default function Home() {
  const featuredProjects = [
    {
      title: "Wanderlust",
      image: "/travel-booking-website-with-property-listings-and-.jpg",
      description: "MERN-based rental platform for searching, booking, and reviewing short-term stays",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://wanderlust-w927.onrender.com/",
      github: "https://github.com/adityaraj9900/wanderlust",
    },
    {
      title: "Urdu Heritage Translation",
      image: "/urdu-text-ocr-translation-interface-with-document-.jpg",
      description: "OCR-based digitization using YOLO detection & Tesseract recognition",
      tech: ["Python", "YOLOv5", "Tesseract", "Gradio"],
    },
    {
      title: "Hand Gesture PC Control",
      image: "/hand-gesture-recognition-controlling-computer-with.jpg",
      description: "Accessibility system using palm & multi-finger gestures. SIH Top 5",
      tech: ["Python", "MediaPipe", "OpenCV"],
      github: "https://github.com/adityaraj9900/Virtual_Mouse-Using-Hand-Gesture",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ThreeScene />

        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-20 left-10 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-blue-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-gradient-to-tl from-cyan-500/40 via-blue-500/30 to-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-r from-pink-500/30 via-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="animate-fade-in-up space-y-4 sm:space-y-6" style={{ animationDelay: "0.1s" }}>
            <div className="inline-block p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mb-4 mt-20 animate-gradient">
              <div className="px-4 py-2 bg-background rounded-full">
                <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  Software Development Engineer
                </p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-balance">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Aditya Kumar Mehta
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
              Full-Stack Developer • AI/ML Enthusiast • Competitive Programmer
            </p>
          </div>

          <div className="animate-fade-in-up max-w-3xl mx-auto px-4" style={{ animationDelay: "0.2s" }}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Crafting robust full-stack applications with seamless frontend and scalable backend - blending clean
              architecture, performance optimization, and modern UI/UX finesse.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up px-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="group w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-6 animate-fade-in-up pt-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="https://github.com/adityaraj9900"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aditya-kumar-mehta-573b3336a"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:adityarajmth845417@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { label: "LeetCode Problems", value: "800+", icon: Code2, gradient: "from-orange-500 to-yellow-500" },
            { label: "AIR in Naukri Campus", value: "60/5.1L", icon: Award, gradient: "from-green-500 to-emerald-500" },
            { label: "LeetCode Rating", value: "1600+", icon: Code2, gradient: "from-blue-500 to-cyan-500" },
            { label: "Projects Built", value: "15+", icon: Sparkles, gradient: "from-purple-500 to-pink-500" },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className="p-4 sm:p-6 text-center space-y-3 animate-fade-in-up hover:scale-105 transition-transform duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div
                className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      <TechStack />



      {/* Featured Projects */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Showcase of production-ready applications built with modern tech stack
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {project.link && (
                      <Button asChild size="sm" className="flex-1">
                        <Link href={project.link} target="_blank">
                          View Live
                        </Link>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" variant="outline" className="group bg-transparent">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Highlight */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <Card
              className="p-6 sm:p-8 animate-fade-in-up hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-card via-card to-purple-500/5"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold">Current Role</h3>
                  <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Software Development Engineer 1
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">OGA Business Solutions • Noida</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Leading development of enterprise CRM platform with 15+ integrated modules using Vue.js and Laravel.
                    Building custom REST APIs and client websites with HTML, CSS, PHP, React.js, MySQL, PrestaShop, and
                    Tailwind CSS. Architecting scalable solutions serving 500+ daily users.
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="p-6 sm:p-8 animate-fade-in-up hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-card via-card to-cyan-500/5"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold">Top Achievements</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-muted-foreground">
                        AIR 60 in Naukri Campus Young Turks (5.1 Lakh candidates)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-muted-foreground">1600+ Rating on LeetCode • 800+ Problems Solved</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span className="text-muted-foreground">Smart India Hackathon Top 5 Finalist</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
