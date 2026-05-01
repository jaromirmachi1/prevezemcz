import { StrictMode } from 'react'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

function SmoothScrollApp() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
    })

    let rafId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrollApp />
    </BrowserRouter>
  </StrictMode>,
)
