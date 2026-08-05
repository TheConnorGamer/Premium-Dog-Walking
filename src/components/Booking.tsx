import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GiPawPrint } from 'react-icons/gi'

gsap.registerPlugin(ScrollTrigger)

const Booking = () => {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', dogName: '', breed: '', service: '', date: '', notes: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [cooldown, setCooldown] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    )
  }, [])

  const update = (field: string, value: string) => {
    setForm({ ...form, [field]: value })
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n })
  }

  const validateStep0 = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[\d\s\-\+\(\)]{7,20}$/.test(form.phone)) e.phone = 'Invalid phone number'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep1 = () => {
    const e: Record<string, string> = {}
    if (!form.dogName.trim()) e.dogName = "Dog's name is required"
    if (!form.breed.trim()) e.breed = 'Breed is required'
    if (!form.service) e.service = 'Please select a service'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (step === 0 && !validateStep0()) return
    if (step === 1 && !validateStep1()) return
    setStep(step + 1)
  }

  const handleConfirm = () => {
    setSubmitted(true)
    setCooldown(true)
    setTimeout(() => setCooldown(false), 3000)
  }

  return (
    <section ref={sectionRef} id="book" className="section-padding bg-warm">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-terracotta font-script text-2xl">let's walk</span>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-bark mt-4 mb-4">Book a Walk</h2>
        <p className="text-bark-light mb-12 text-lg">Tell us about your furry friend and we'll match them with the perfect walker.</p>

        {/* Progress */}
        <div className="flex justify-center gap-2 mb-12">
          {[0, 1, 2].map((s) => (
            <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'w-12 bg-terracotta' : 'w-12 bg-bark/10'}`} />
          ))}
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="warm-card p-10 text-center"
          >
            <GiPawPrint className="text-terracotta text-5xl mx-auto mb-4" />
            <h3 className="font-display text-2xl text-bark mb-3">Booking Confirmed!</h3>
            <p className="text-bark-light">We will be in touch shortly to confirm your walk.</p>
            <button onClick={() => { setSubmitted(false); setStep(0); setForm({ name: '', email: '', phone: '', dogName: '', breed: '', service: '', date: '', notes: '' }) }} className="pill-btn bg-terracotta text-white px-8 py-3 font-medium hover:bg-terracotta-light transition-all mt-6">Book Another</button>
          </motion.div>
        ) : (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          className="warm-card p-10 text-left"
        >
          <input type="text" name="honeypot" value="" onChange={() => {}} tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }} />
          {step === 0 && (
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-bark mb-6">Your Details</h3>
              {[
                { label: 'Your Name', field: 'name', type: 'text' },
                { label: 'Email', field: 'email', type: 'email' },
                { label: 'Phone', field: 'phone', type: 'tel' }
              ].map(({ label, field, type }) => (
                <div key={field}>
                  <label className="block text-bark-light text-sm mb-2">{label} *</label>
                  <input
                    type={type} required maxLength={field === 'phone' ? 20 : 100}
                    pattern={field === 'phone' ? '[\\d\\s\\-\\+\\(\\)]{7,20}' : undefined}
                    value={(form as any)[field]}
                    onChange={(e) => update(field, e.target.value)}
                    className={`w-full bg-bark/5 border-0 rounded-2xl px-5 py-3.5 text-bark focus:ring-2 focus:ring-terracotta/30 outline-none ${errors[field] ? 'ring-2 ring-red-400' : ''}`}
                    placeholder={label}
                  />
                  {errors[field] && <p className="text-red-500 text-[10px] mt-1">{errors[field]}</p>}
                </div>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-bark mb-6">About Your Dog</h3>
              {[
                { label: "Dog's Name", field: 'dogName', type: 'text' },
                { label: 'Breed', field: 'breed', type: 'text' }
              ].map(({ label, field, type }) => (
                <div key={field}>
                  <label className="block text-bark-light text-sm mb-2">{label} *</label>
                  <input
                    type={type} required maxLength={100}
                    value={(form as any)[field]}
                    onChange={(e) => update(field, e.target.value)}
                    className={`w-full bg-bark/5 border-0 rounded-2xl px-5 py-3.5 text-bark focus:ring-2 focus:ring-terracotta/30 outline-none ${errors[field] ? 'ring-2 ring-red-400' : ''}`}
                    placeholder={label}
                  />
                  {errors[field] && <p className="text-red-500 text-[10px] mt-1">{errors[field]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-bark-light text-sm mb-2">Service *</label>
                <select
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                  className={`w-full bg-bark/5 border-0 rounded-2xl px-5 py-3.5 text-bark focus:ring-2 focus:ring-terracotta/30 outline-none ${errors.service ? 'ring-2 ring-red-400' : ''}`}
                >
                  <option value="">Select...</option>
                  <option value="solo">Solo Walk {'—'} {'£'}18</option>
                  <option value="group">Group Adventure {'—'} {'£'}14</option>
                  <option value="sitting">Pet Sitting {'—'} {'£'}45</option>
                  <option value="puppy">Puppy Visits {'—'} {'£'}12</option>
                </select>
                {errors.service && <p className="text-red-500 text-[10px] mt-1">{errors.service}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-bark mb-6">Schedule</h3>
              <div>
                <label className="block text-bark-light text-sm mb-2">Preferred Date</label>
                <input
                  type="date" value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className="w-full bg-bark/5 border-0 rounded-2xl px-5 py-3.5 text-bark focus:ring-2 focus:ring-terracotta/30 outline-none"
                />
              </div>
              <div>
                <label className="block text-bark-light text-sm mb-2">Special Notes</label>
                <textarea
                  rows={3} maxLength={500} value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  className="w-full bg-bark/5 border-0 rounded-2xl px-5 py-3.5 text-bark focus:ring-2 focus:ring-terracotta/30 outline-none resize-none"
                  placeholder="Any special requirements..."
                />
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="pill-btn border-2 border-bark/10 text-bark px-8 py-3 font-medium hover:border-terracotta transition-all">
                Back
              </button>
            )}
            <button
              onClick={() => step < 2 ? handleNext() : handleConfirm()}
              disabled={cooldown}
              className="pill-btn bg-terracotta text-white px-8 py-3 font-medium hover:bg-terracotta-light transition-all ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step < 2 ? 'Continue' : cooldown ? 'Confirmed!' : 'Confirm Booking'}
            </button>
          </div>
        </motion.div>
        )}
      </div>
    </section>
  )
}

export default Booking
