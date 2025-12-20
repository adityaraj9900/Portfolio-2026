import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Wanderlust",
      description:
        "MERN-based rental platform for searching, booking, and reviewing short-term stays with Cloudinary integration.",
      image: "/travel-booking-website-with-property-listings-and-.jpg",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary"],
      link: "https://wanderlust-w927.onrender.com/",
      github: "https://github.com/adityaraj9900/wanderlust",
      highlights: ["User authentication", "Image uploads", "Reviews & ratings", "Booking system"],
    },
    {
      title: "Urdu Heritage Translation System",
      description: "OCR-based digitization using YOLO detection & Tesseract recognition with Gradio web interface.",
      image: "/urdu-text-ocr-translation-interface-with-document-.jpg",
      tech: ["Python", "YOLOv5", "Tesseract OCR", "Gradio"],
      links: [
        { label: "Paper", url: "http://proceeding.conferenceworld.in/ICMR-2025/21.pdf" },
        { label: "Demo 1", url: "https://drive.google.com/file/d/1pc-9Ydt3lbmyOoRM5spqEYLspCxTme82/view" },
        { label: "Demo 2", url: "https://drive.google.com/file/d/1Zq6T_xtV1kPSqn6x21LOKUkwhYKAspZI/view" },
      ],
      highlights: ["YOLO detection", "OCR recognition", "Web interface", "Research paper published"],
    },
    {
      title: "Hand Gesture Controlled PC",
      description:
        "Accessibility system using palm & multi-finger gestures. Selected in Top 5 for Smart India Hackathon.",
      image: "/hand-gesture-recognition-controlling-computer-with.jpg",
      tech: ["Python", "MediaPipe", "OpenCV", "CV2"],
      github: "https://github.com/adityaraj9900/Virtual_Mouse-Using-Hand-Gesture",
      highlights: ["Multi-finger gestures", "Real-time tracking", "90%+ accuracy", "SIH Top 5"],
    },
    {
      title: "Driver Drowsiness Detection",
      description:
        "Facial landmark tracking with real-time alerts using OpenCV and MediaPipe for enhanced driver safety.",
      image: "/driver-drowsiness-detection-system-with-facial-lan.jpg",
      tech: ["Python", "OpenCV", "MediaPipe", "CV2"],
      github: "https://github.com/adityaraj9900/Driver-Drowsiness-System",
      highlights: ["Real-time alerts", "Facial tracking", "Safety enhancement", "Eye aspect ratio"],
    },
    {
      title: "3D Website",
      description: "Interactive 3D website with immersive animations and smooth transitions using Three.js and GSAP.",
      image: "/interactive-3d-website-with-floating-elements-and-.jpg",
      tech: ["Three.js", "GSAP", "JavaScript", "WebGL"],
      github: "https://github.com/adityaraj9900/3d-website",
      highlights: ["3D graphics", "Smooth animations", "Interactive elements", "WebGL"],
    },
    {
      title: "Notion Clone - Jotion",
      description:
        "Full-featured Notion clone with real-time collaboration, rich text editing, and workspace management.",
      image: "/notion-style-note-taking-app-with-sidebar-and-rich.jpg",
      tech: ["Next.js", "React", "TypeScript", "Tailwind"],
      github: "https://github.com/adityaraj9900/jotion",
      highlights: ["Real-time editing", "Workspace management", "Rich text editor", "Collaboration"],
    },
    {
      title: "Blog Chat Application",
      description: "Full-stack blog platform with real-time chat functionality using Laravel and Blade templates.",
      image: "/blog-website-with-integrated-live-chat-sidebar.jpg",
      tech: ["PHP", "Laravel", "Blade", "JavaScript", "CSS"],
      github: "https://github.com/adityaraj9900/Blog-chat",
      highlights: ["Real-time chat", "Blog management", "User authentication", "Blade templates"],
    },
    {
      title: "Spotify Clone",
      description: "Replica of Spotify UI with playlist rendering and music playback functionality.",
      image: "/spotify-music-player-interface-with-playlist-and-c.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/adityaraj9900/Spotify-Clone",
      highlights: ["Pixel-perfect UI", "Music player", "Playlist management", "Responsive design"],
    },
    {
      title: "Smart Restaurant System",
      description:
        "Full-stack restaurant management with AI chatbot, one-click ordering, and admin dashboard. Reduced order time by 75%.",
      image: "/modern-restaurant-pos-system-with-ai-chat-interfac.jpg",
      tech: ["React", "Node.js", "AI", "Express"],
      link: "https://v0-smart-restaurant-system-kappa.vercel.app/",
      github: "https://github.com/adityaraj9900/smart-restaurant-system",
      highlights: ["AI Chatbot", "One-click ordering", "Admin Dashboard", "Real-time updates"],
    },
    {
      title: "Skincare E-Commerce",
      description:
        "Modern e-commerce platform for skincare products with product catalog, cart functionality, and checkout system.",
      image: "/elegant-skincare-product-website-with-shopping-fea.jpg",
      tech: ["Next.js", "Tailwind CSS", "React"],
      link: "https://v0-skincare-e-commerce-website-two.vercel.app/",
      highlights: ["Product catalog", "Shopping cart", "Responsive design", "Modern UI"],
    },
    {
      title: "3D Inventory System",
      description:
        "Interactive 3D product visualization system with inventory management and immersive user experience.",
      image: "/3d-inventory-dashboard-with-floating-products-and-.jpg",
      tech: ["Three.js", "React", "GSAP", "JavaScript"],
      link: "https://v0-3-d-inventory-system.vercel.app/",
      highlights: ["3D visualization", "Interactive controls", "Product management", "Smooth animations"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Button asChild variant="ghost" className="mb-6 sm:mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-4 mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">All Projects</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            A comprehensive showcase of my work spanning full-stack applications, AI/ML projects, and interactive
            experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.05 * (index % 6)}s` }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.title}</h3>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div>
                  <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase">Highlights</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start">
                        <span className="mr-1 text-primary">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.link && (
                    <Button asChild size="sm" className="flex-1 min-w-[100px]">
                      <Link href={project.link} target="_blank">
                        <ExternalLink className="mr-1.5 h-3 w-3" />
                        Live
                      </Link>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild size="sm" variant="outline" className="flex-1 min-w-[100px] bg-transparent">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-1.5 h-3 w-3" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.links && (
                    <div className="flex flex-wrap gap-2 w-full">
                      {project.links.map((link, i) => (
                        <Button key={i} asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Link href={link.url} target="_blank">
                            {link.label}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
