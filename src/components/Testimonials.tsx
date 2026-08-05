import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiStar, HiHeart } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  { name: 'Olivia', dog: 'Buddy · Golden Retriever', text: 'Emma has been walking Buddy for 2 years and he absolutely adores her. The GPS tracking gives us such peace of mind.', rating: 5 },
  { name: 'Tom', dog: 'Luna · Cockapoo', text: 'James takes Luna on the most incredible hikes. She comes home happy, tired, and clearly had the best day. Cannot recommend enough.', rating: 5 },
  { name: 'Priya', dog: 'Max · French Bulldog', text: 'Sophie is so patient with Max. He is usually nervous around new people but warmed to her instantly. The photo updates make my day.', rating: 5 },
  { name: 'Daniel', dog: 'Rosie · Labrador', text: 'The group walks have been amazing for Rosie\'s socialisation. She has made so many furry friends. Professional, caring service.', rating: 5 },
]

const Testimonials = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!marqueeRef.current) return
    gsap.fromTo(marqueeRef.current,
      { x: '-10%' },
      { x: '0%', duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: marqueeRef.current, start: 'top 90%' } }
    )
  }, [])

  return (
    <section id="reviews" className="section-padding bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-terracotta font-script text-2xl">pawsome reviews</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4">Loved by Dogs<br />& Their Humans</h2>
        </div>

        <div ref={marqueeRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="warm-card p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <HiStar key={i} className="text-amber-400" />
                ))}
              </div>
              <p className="text-bark text-lg leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-bark/5">
                <div>
                  <div className="font-display text-lg text-bark">{r.name}</div>
                  <div className="text-bark-light text-sm">{r.dog}</div>
                </div>
                <HiHeart className="text-3xl text-terracotta" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
