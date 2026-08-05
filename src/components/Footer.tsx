import { motion } from 'framer-motion'
import { GiPawPrint } from 'react-icons/gi'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

const links = {
  Services: ['Solo Walks', 'Group Adventures', 'Pet Sitting', 'Puppy Visits', 'Senior Care', 'Adventure Hikes'],
  Company: ['About Us', 'Our Walkers', 'Careers', 'Press'],
  Support: ['FAQ', 'Contact', 'Book a Walk', 'Walker Area']
}

const Footer = () => (
  <footer className="bg-bark text-cream-dark">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <GiPawPrint className="text-3xl text-terracotta" />
            <span className="font-display text-2xl text-cream font-bold">Paws & Paths</span>
          </div>
          <p className="text-cream-dark/60 text-sm leading-relaxed max-w-xs">
            Premium dog walking and pet sitting across London. DBS checked, fully insured, and canine first-aid trained.
          </p>
          <div className="flex gap-4 mt-6">
            {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
              <motion.a key={i} href="#" whileHover={{ y: -3 }} className="w-10 h-10 rounded-full bg-cream-dark/10 flex items-center justify-center text-cream-dark hover:text-terracotta transition-colors">
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-display text-cream text-lg mb-6">{title}</h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}><a href="#" className="text-cream-dark/60 hover:text-terracotta text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-cream-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-cream-dark/40 text-xs">© 2026 Paws & Paths. Made with ❤️ for every good boy and girl.</p>
        <div className="flex gap-6 text-xs text-cream-dark/40">
          <a href="#" className="hover:text-terracotta transition-colors">Privacy</a>
          <a href="#" className="hover:text-terracotta transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
