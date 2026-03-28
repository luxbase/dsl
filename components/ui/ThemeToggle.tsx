"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className={cn(
        "w-10 h-10 rounded-xl bg-[rgb(var(--bg-surface))] border border-[rgb(var(--border))]",
        className
      )} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative w-10 h-10 rounded-xl flex items-center justify-center",
        "bg-[rgb(var(--bg-surface))] border border-[rgb(var(--border))]",
        "hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--accent)/0.08)]",
        "transition-all duration-200 group",
        className
      )}
    >
      <span
        className={cn(
          "absolute transition-all duration-300",
          isDark
            ? "opacity-0 rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
        )}
      >
        <Sun size={18} className="text-amber-500" />
      </span>
      <span
        className={cn(
          "absolute transition-all duration-300",
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        )}
      >
        <Moon size={18} className="text-forest-400" />
      </span>
    </button>
  );
}
