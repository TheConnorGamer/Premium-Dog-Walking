import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { GiPawPrint } from 'react-icons/gi'

const links = ['Services', 'Walkers', 'Map', 'Reviews', 'FAQ', 'Book']

const Navbar = ({ lenis }: { lenis: React.RefObject<any> }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
            <GiPawPrint className="text-2xl text-terracotta group-hover:rotate-12 transition-transform" />
            <span className="font-display text-2xl text-bark font-bold">
              Paws <span className="text-terracotta">&</span> Paths
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-bark-light hover:text-terracotta text-sm font-medium transition-colors">
                {l}
              </button>
            ))}
            <button onClick={() => scrollTo('book')} className="pill-btn bg-terracotta text-white px-8 py-3 text-sm font-medium hover:bg-terracotta-light transition-all">
              Book a Walk
            </button>
          </div>

          <button className="lg:hidden text-2xl text-bark" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 lg:hidden"
        >
          {links.map((l, i) => (
            <motion.button
              key={l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => scrollTo(l)}
              className="text-2xl text-bark hover:text-terracotta font-display transition-colors"
            >
              {l}
            </motion.button>
          ))}
        </motion.div>
      )}
    </>
  )
}

export default Navbar
