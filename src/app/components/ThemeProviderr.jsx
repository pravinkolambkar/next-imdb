'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProviderr({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}