"use client"
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
export function GlobalProviders({children}: { children: React.ReactNode }) {

  return (
    <NextUIProvider>
      <NextThemesProvider
      attribute='class'
      defaultTheme='green'
      themes={['dark','light','green','red']}
      >
      {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}