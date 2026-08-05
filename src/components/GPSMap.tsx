import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiLocationMarker, HiClock, HiPhotograph } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const GPSMap = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } })
    tl.fromTo('.map-track', { width: '0%' }, { width: '100%', duration: 2, ease: 'power2.inOut' })
    tl.fromTo('.map-marker', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=1')
  }, [])

  return (
    <section ref={sectionRef} id="map" className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map Mockup */}
          <div className="relative">
            <div className="warm-card p-4 aspect-[4/3] bg-sage/5 relative overflow-hidden">
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                  <div key={`h-${i}`} className="absolute w-full h-px bg-bark" style={{ top: `${i * 14}%` }} />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div key={`v-${i}`} className="absolute h-full w-px bg-bark" style={{ left: `${i * 14}%` }} />
                ))}
              </div>

              {/* Route */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M50 200 Q100 100, 150 150 T250 80 T350 120"
                  fill="none"
                  stroke="#d4845a"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  strokeLinecap="round"
                  className="map-track"
                />
              </svg>

              {/* Markers */}
              <div className="absolute top-[50%] left-[12%] map-marker">
                <div className="w-4 h-4 bg-terracotta rounded-full shadow-lg shadow-terracotta/50 animate-pulse" />
                <div className="absolute -top-8 -left-8 bg-white rounded-xl px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-bark shadow-lg whitespace-normal sm:whitespace-nowrap max-w-[80px] sm:max-w-none">
                  🏠 Your Home
                </div>
              </div>
              <div className="absolute top-[25%] left-[37%] map-marker">
                <div className="w-4 h-4 bg-sage rounded-full shadow-lg shadow-sage/50" />
              </div>
              <div className="absolute top-[25%] left-[62%] map-marker">
                <div className="w-4 h-4 bg-sage rounded-full shadow-lg shadow-sage/50" />
              </div>
              <div className="absolute top-[37%] left-[87%] map-marker">
                <div className="w-4 h-4 bg-terracotta rounded-full shadow-lg shadow-terracotta/50 animate-pulse" />
                <div className="absolute -top-8 -right-2 bg-white rounded-xl px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-bark shadow-lg whitespace-normal sm:whitespace-nowrap max-w-[80px] sm:max-w-none">
                  🐾 Current Location
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="text-sage font-script text-2xl">live tracking</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4 mb-8">
              Know Where<br />Your Pup Is
            </h2>
            <p className="text-bark-light text-lg leading-relaxed mb-10">
              Every walk includes real-time GPS tracking, photo updates, and a detailed walk report so you always know your furry family member is safe and happy.
            </p>

            <div className="space-y-6">
              {[
                { icon: HiLocationMarker, title: 'Live GPS Tracking', desc: 'See your dog\'s exact route in real-time during every walk.' },
                { icon: HiPhotograph, title: 'Photo Updates', desc: 'Receive adorable photos and videos throughout the adventure.' },
                { icon: HiClock, title: 'Walk Reports', desc: 'Detailed post-walk summary with route, duration, and bathroom breaks.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center text-terracotta text-xl shrink-0">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-bark">{item.title}</h4>
                    <p className="text-bark-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GPSMap
