"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:adityarajmth845417@gmail.com?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adityarajmth845417@gmail.com",
      link: "mailto:adityarajmth845417@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7779840590",
      link: "tel:+917779840590",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, Uttar Pradesh",
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/adityaraj9900",
      username: "adityaraj9900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/aditya-kumar-mehta-573b3336a",
      username: "Aditya Kumar Mehta",
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Get In Touch</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {"I'm always interested in hearing about new projects and opportunities. Feel free to reach out!"}
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <Card className="p-4 sm:p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="p-4">
                    {info.link ? (
                      <Link href={info.link} className="flex items-start gap-4 group">
                        <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors break-words">
                            {info.value}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div className="flex items-start gap-4">
                        <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-sm sm:text-base font-medium break-words">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Social Links</h2>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <Card key={social.label} className="p-4">
                    <Link href={social.link} target="_blank" className="flex items-start gap-4 group">
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-muted-foreground">{social.label}</p>
                        <p className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors break-words">
                          {social.username}
                        </p>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
