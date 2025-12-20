import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Trophy, Award, Code2, ExternalLink } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      category: "Competitive Programming",
      icon: Code2,
      items: [
        {
          title: "All India Rank 60 / 5.1 Lakh",
          event: "Naukri Campus Young Turks",
          year: "2024",
          link: "https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/67081481e3b9a668e0007b33",
          badge: "Top 0.001%",
        },
        {
          title: "All India Rank 676",
          event: "CodeKaze September",
          year: "2024",
          link: "https://drive.google.com/file/d/1ohd8hdsRhoJ4FTKcLvo399PE0U88TwRp/view?usp=sharing",
        },
        {
          title: "Rank 69 / 13,000",
          event: "CodeChef August Lunchtime Div 4",
          year: "2024",
          link: "https://www.codechef.com/rankings/LTIME111D?itemsPerPage=100&order=asc&page=132&sortBy=rank",
          badge: "Top 0.5%",
        },
        {
          title: "LeetCode Rating 1600+",
          event: "800+ Problems Solved",
          year: "Ongoing",
          link: "https://leetcode.com/aditya9900/",
        },
      ],
    },
    {
      category: "Hackathons",
      icon: Trophy,
      items: [
        {
          title: "Top 5 Finalist",
          event: "Smart India Hackathon 2023",
          year: "2023",
          description: "Hand Gesture Controlled PC project",
          link: "https://drive.google.com/file/d/1PU5CoQVJ_G0mJOSPPiXnk9pT0JxuyEb5/view?usp=sharing",
        },
        {
          title: "4th Place",
          event: "Technokrats'23 Hackathon",
          year: "2023",
        },
      ],
    },
    {
      category: "Certifications",
      icon: Award,
      items: [
        {
          title: "Oracle Academy Certifications",
          event: "Multiple Courses Completed",
          description:
            "AI with ML in Python, Database Foundations, Database Programming with SQL, Java Fundamentals, Java Foundations, Java Programming",
        },
      ],
    },
  ]

  const profiles = [
    { name: "LeetCode", link: "https://leetcode.com/aditya9900/", stats: "1600+ Rating" },
    { name: "GeeksforGeeks", link: "https://auth.geeksforgeeks.org/user/aditya9900/", stats: "Active" },
    { name: "HackerRank", link: "https://www.hackerrank.com/profile/adityarajmth8451", stats: "Active" },
    { name: "Codolio", link: "https://codolio.com/profile/8XC3FILo", stats: "Profile" },
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Achievements</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Recognition and accomplishments in competitive programming, hackathons, and professional development.
          </p>
        </div>

        {/* Achievements by Category */}
        <div className="space-y-10 sm:space-y-12">
          {achievements.map((category, catIndex) => (
            <section
              key={category.category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 * catIndex}s` }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold">{category.category}</h2>
              </div>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {category.items.map((item, index) => (
                  <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="space-y-1 flex-1">
                          <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                          <p className="text-sm sm:text-base text-primary font-medium">{item.event}</p>
                          {item.description && (
                            <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                          )}
                        </div>
                        {item.badge && (
                          <Badge variant="default" className="text-xs self-start">
                            {item.badge}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs sm:text-sm text-muted-foreground">{item.year}</span>
                        {item.link && (
                          <Button asChild size="sm" variant="ghost">
                            <Link href={item.link} target="_blank">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Coding Profiles */}
        <section className="mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Coding Profiles</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {profiles.map((profile) => (
              <Card key={profile.name} className="p-4 hover:shadow-lg transition-shadow">
                <Link href={profile.link} target="_blank" className="block">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-semibold">{profile.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{profile.stats}</p>
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
