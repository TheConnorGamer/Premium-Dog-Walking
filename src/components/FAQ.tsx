import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiChevronDown } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  { q: 'Are your walkers insured and DBS checked?', a: 'Absolutely. Every walker is fully insured, enhanced DBS checked, and certified in canine first aid. Your dog\'s safety is our number one priority.' },
  { q: 'How do group walks work?', a: 'We carefully match 2-4 dogs based on size, temperament, and energy levels. Dogs are always supervised and walks take place in safe, familiar parks.' },
  { q: 'What happens in bad weather?', a: 'We walk rain or shine! We use appropriate gear and adjust routes as needed. On extreme weather days, we offer indoor play sessions as an alternative.' },
  { q: 'Can I meet my walker before booking?', a: 'Yes! We arrange a free meet-and-greet so you and your dog can get to know your walker. It is important everyone feels comfortable.' },
  { q: 'How do I track my dog\'s walk?', a: 'You will receive a live tracking link via WhatsApp or email at the start of each walk. You can see the route, duration, and receive photo updates.' },
  { q: 'What is your cancellation policy?', a: 'We offer free cancellation up to 24 hours before the walk. Late cancellations within 24 hours are charged at 50% of the walk price.' }
]

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(sectionRef.current.querySelectorAll('.faq-row'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="section-padding bg-warm">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-terracotta font-script text-2xl">got questions?</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4">Frequently Asked</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-row">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg text-bark">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    className="text-terracotta text-xl shrink-0"
                  >
                    <HiChevronDown />
                  </motion.span>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden text-bark-light leading-relaxed mt-4"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
