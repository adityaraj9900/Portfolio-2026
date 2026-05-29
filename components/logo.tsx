"use client"

export function Logo() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* Logo mark */}
      <div className="relative">
        {/* Glow layer */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500 scale-110" />

        {/* Outer gradient shell */}
        <div className="relative w-9 h-9 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400" />
          {/* Inner dark cutout */}
          <div className="absolute inset-[1.5px] rounded-[9px] bg-background flex items-center justify-center">
            <span className="font-black text-[11px] tracking-tight bg-gradient-to-br from-violet-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              AKM
            </span>
          </div>
        </div>

        {/* Online pulse indicator */}
        <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border-2 border-background" />
        </span>
      </div>

      {/* Text mark */}
      <div className="flex flex-col leading-none gap-0.5">
        <span className="text-sm font-bold text-foreground leading-none">
          Aditya{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Kumar</span>
        </span>
        <span className="text-[9px] font-bold tracking-[0.18em] uppercase leading-none bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Mehta · SDE
        </span>
      </div>
    </div>
  )
}
