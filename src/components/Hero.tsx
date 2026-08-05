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

      {/* Dog illustration - CSS art */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative w-72 h-72">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-36 bg-bark/5 rounded-[60%] blur-xl" />
          {/* Dog illustration using divs */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-28 bg-warm rounded-[40%] border-2 border-bark/20">
            <div className="absolute -top-16 left-8 w-24 h-20 bg-warm rounded-full border-2 border-bark/20">
              <div className="absolute top-4 left-3 w-2 h-2 bg-bark rounded-full" />
              <div className="absolute top-4 right-3 w-2 h-2 bg-bark rounded-full" />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-2 bg-bark rounded-full" />
              <div className="absolute -top-6 left-4 w-8 h-10 bg-bark/10 rounded-full animate-wag origin-bottom" />
              <div className="absolute -top-6 right-4 w-8 h-10 bg-bark/10 rounded-full animate-wag origin-bottom" style={{ animationDelay: '0.1s' }} />
            </div>
            <div className="absolute -bottom-6 left-6 w-6 h-12 bg-warm border-2 border-bark/20 rounded-b-full" />
            <div className="absolute -bottom-6 right-6 w-6 h-12 bg-warm border-2 border-bark/20 rounded-b-full" />
          </div>
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
