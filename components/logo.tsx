"use client"

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative w-10 h-10">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent opacity-80 group-hover:opacity-100 transition-opacity animate-spin-slow"
          style={{ animationDuration: "8s" }}
        />

        {/* Inner content */}
        <div className="absolute inset-1 rounded-lg bg-background flex items-center justify-center">
          <span className="text-sm font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent">
            AK
          </span>
        </div>

        {/* Accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-accent to-primary rounded-full animate-pulse" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
        Portfolio
      </span>
    </div>
  )
}
