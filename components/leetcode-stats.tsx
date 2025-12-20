"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Trophy, Target, Zap } from "lucide-react"

export function LeetCodeStats() {
  const stats = {
    total: 800,
    easy: 320,
    medium: 380,
    hard: 100,
    rating: "1600+",
    rank: "Top 15%",
  }

  const topicsSolved = [
    { name: "Arrays & Hashing", count: 150, color: "bg-blue-500" },
    { name: "Two Pointers", count: 95, color: "bg-green-500" },
    { name: "Stack & Queue", count: 88, color: "bg-purple-500" },
    { name: "Binary Search", count: 75, color: "bg-orange-500" },
    { name: "Sliding Window", count: 68, color: "bg-pink-500" },
    { name: "Linked List", count: 62, color: "bg-cyan-500" },
    { name: "Trees", count: 85, color: "bg-emerald-500" },
    { name: "Dynamic Programming", count: 72, color: "bg-red-500" },
    { name: "Graphs", count: 58, color: "bg-indigo-500" },
    { name: "Backtracking", count: 47, color: "bg-yellow-500" },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Competitive Programming
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My LeetCode journey: solving problems, mastering algorithms, and improving every day
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { label: "Total Solved", value: stats.total, icon: Code2, gradient: "from-blue-500 to-cyan-500" },
            { label: "LeetCode Rating", value: stats.rating, icon: Trophy, gradient: "from-orange-500 to-yellow-500" },
            { label: "Global Rank", value: stats.rank, icon: Target, gradient: "from-purple-500 to-pink-500" },
            { label: "Contest Rating", value: "1600+", icon: Zap, gradient: "from-green-500 to-emerald-500" },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className="p-4 sm:p-6 text-center space-y-3 animate-fade-in-up hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Difficulty Breakdown */}
        <Card
          className="p-6 sm:p-8 mb-8 sm:mb-12 animate-fade-in-up hover:shadow-xl transition-shadow"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Problem Difficulty Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Easy", count: stats.easy, color: "bg-green-500", percentage: (stats.easy / stats.total) * 100 },
              {
                label: "Medium",
                count: stats.medium,
                color: "bg-orange-500",
                percentage: (stats.medium / stats.total) * 100,
              },
              { label: "Hard", count: stats.hard, color: "bg-red-500", percentage: (stats.hard / stats.total) * 100 },
            ].map((diff) => (
              <div key={diff.label} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm sm:text-base">{diff.label}</span>
                  <Badge variant="secondary" className="font-mono">
                    {diff.count}
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${diff.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${diff.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-right">{diff.percentage.toFixed(1)}%</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Topics Breakdown */}
        <Card
          className="p-6 sm:p-8 animate-fade-in-up hover:shadow-xl transition-shadow"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Problems Solved by Topic</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {topicsSolved.map((topic, index) => (
              <div key={topic.name} className="space-y-2 group">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">
                    {topic.name}
                  </span>
                  <Badge variant="outline" className="font-mono">
                    {topic.count}
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full ${topic.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                    style={{ width: `${(topic.count / 150) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
