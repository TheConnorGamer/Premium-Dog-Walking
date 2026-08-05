import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GiPawPrint, GiDogBowl, GiHouse, GiHeartPlus, GiSittingDog, GiPathDistance } from 'react-icons/gi'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: GiPawPrint, title: 'Solo Walks', desc: 'One-on-one attention for your pup. Personalised routes and pace tailored to your dog.', price: '£18', color: 'bg-terracotta/10 text-terracotta', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80' },
  { icon: GiSittingDog, title: 'Group Adventures', desc: 'Social walks with 2-4 compatible dogs. Great for socialisation and play.', price: '£14', color: 'bg-sage/10 text-sage', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80' },
  { icon: GiHouse, title: 'Pet Sitting', desc: 'In-home care while you are away. Feeding, playtime, cuddles, and updates.', price: '£45', color: 'bg-amber-50 text-amber-600', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80' },
  { icon: GiDogBowl, title: 'Puppy Visits', desc: 'Midday check-ins for puppies. Feeding, potty breaks, and essential socialisation.', price: '£12', color: 'bg-purple-50 text-purple-500', image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&q=80' },
  { icon: GiHeartPlus, title: 'Senior Care', desc: 'Gentle walks and attentive care for older dogs with special needs.', price: '£22', color: 'bg-rose-50 text-rose-400', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=80' },
  { icon: GiPathDistance, title: 'Adventure Hikes', desc: 'Half-day countryside hikes for high-energy breeds. Pickup and drop-off included.', price: '£38', color: 'bg-teal-50 text-teal-600', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80' }
]

const Services = () => {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    gsap.fromTo(gridRef.current.children,
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.08, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-terracotta font-script text-2xl">our services</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4">Tailored Care for<br />Every Good Boy & Girl</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              whileHover={{ y: -6 }}
              className="warm-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/20 to-transparent" />
              </div>
              <div className="p-8">
              <div className={`w-16 h-16 rounded-2xl ${svc.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                <svc.icon />
              </div>
              <h3 className="font-display text-2xl text-bark mb-3">{svc.title}</h3>
              <p className="text-bark-light text-sm leading-relaxed mb-6">{svc.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-terracotta">{svc.price}</span>
                <span className="text-bark-light text-xs">/ walk</span>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
