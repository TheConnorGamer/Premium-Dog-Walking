import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiStar, HiBadgeCheck } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const walkers = [
  { name: 'Emma', role: 'Lead Walker', dogs: '3000+', rating: 5.0, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', bio: 'Former veterinary nurse with 6 years of professional walking experience.', special: 'Senior dogs' },
  { name: 'James', role: 'Adventure Guide', dogs: '2500+', rating: 4.9, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', bio: 'Qualified canine behaviourist. Specialises in high-energy breeds and adventure hikes.', special: 'Hiking' },
  { name: 'Sophie', role: 'Puppy Specialist', dogs: '1800+', rating: 5.0, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face', bio: 'Puppy training certified. Loves helping young dogs build confidence and social skills.', special: 'Puppies' },
]

const WalkerProfiles = () => {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current) return
    gsap.fromTo(trackRef.current.children,
      { x: 80, opacity: 0, rotateY: 10 },
      { x: 0, opacity: 1, rotateY: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: trackRef.current, start: 'top 80%' } }
    )
  }, [])

  return (
    <section id="walkers" className="section-padding bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-terracotta font-script text-2xl">meet the pack</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4">Our Walkers</h2>
          <p className="text-bark-light mt-4 text-lg">Every walker is DBS checked, insured, and canine first-aid trained.</p>
        </div>

        <div ref={trackRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {walkers.map((w) => (
            <motion.div
              key={w.name}
              whileHover={{ y: -8 }}
              className="warm-card overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={w.img}
                  alt={w.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bark/60 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white">
                    <HiBadgeCheck className="text-terracotta-light" />
                    <span className="text-sm font-medium">{w.dogs} walks completed</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl text-bark">{w.name}</h3>
                  <div className="flex items-center gap-1 text-terracotta">
                    <HiStar />
                    <span className="text-sm font-bold">{w.rating}</span>
                  </div>
                </div>
                <p className="text-terracotta font-medium text-sm mb-3">{w.role}</p>
                <p className="text-bark-light text-sm leading-relaxed mb-4">{w.bio}</p>
                <div className="inline-block px-3 py-1 bg-sage/10 text-sage text-xs rounded-full font-medium">
                  🐾 {w.special} specialist
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WalkerProfiles
