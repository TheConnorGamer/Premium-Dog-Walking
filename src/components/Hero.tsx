import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiArrowDown } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    blobRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, {
        y: i % 2 === 0 ? -20 : 20,
        x: i % 3 === 0 ? 15 : -15,
        duration: 4 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-radial">
      {/* Full-bleed background photo */}
      <img
        src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-warm/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-warm/90 via-warm/70 to-warm/40" />
      {/* Floating blobs */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(el) => { blobRefs.current[i] = el }}
          className="absolute opacity-10"
          style={{
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            left: `${15 + i * 25}%`,
            top: `${10 + i * 20}%`,
            borderRadius: i % 2 === 0 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '60% 40% 30% 70% / 60% 30% 70% 40%',
            background: i % 2 === 0 ? '#d4845a' : '#7d9b76',
          }}
        />
      ))}

      {/* Dog photo */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80"
            alt="Happy dog on a walk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/30 to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium mb-8"
          >
            🐾 Trusted by 200+ happy pups in London
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-bark leading-[0.95] mb-8 text-balance"
          >
            Walks that make
            <br />
            <span className="text-terracotta italic">tails wag</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-bark-light text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Premium dog walking and pet sitting for London's most loved companions. GPS-tracked walks, loving care, and tail-wagging adventures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
              className="pill-btn bg-terracotta text-white px-10 py-4 text-lg font-medium hover:bg-terracotta-light transition-all paw-shadow"
            >
              Schedule a Walk
            </button>
            <button className="pill-btn border-2 border-bark/10 text-bark px-10 py-4 text-lg font-medium hover:border-terracotta hover:text-terracotta transition-all">
              Meet Our Walkers
            </button>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-terracotta"
      >
        <HiArrowDown size={24} />
      </motion.button>
    </section>
  )
}

export default Hero
