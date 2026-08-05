import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WalkerProfiles from './components/WalkerProfiles'
import GPSMap from './components/GPSMap'
import Booking from './components/Booking'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.4, lerp: 0.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => { lenis.destroy() }
  }, [])

  return (
    <>
      <Navbar lenis={lenisRef} />
      <main>
        <Hero />
        <Services />
        <WalkerProfiles />
        <GPSMap />
        <Testimonials />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
