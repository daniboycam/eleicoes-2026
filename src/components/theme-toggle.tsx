"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="p-2 rounded-full bg-slate-200 w-10 h-10"></button>;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
      aria-label="Alternar tema"
    >
      {resolvedTheme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
