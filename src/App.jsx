import { useEffect, useRef, useState } from 'react'
import { motion, MotionConfig, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SITE, u, nav, chips, stats, programs, faqs, discover, policies, social, WHATSAPP } from './data.js'

gsap.registerPlugin(ScrollTrigger)
const ease = [0.22, 1, 0.36, 1]
const fmt = (n) => Math.round(n).toLocaleString('en-IN')

function Logo() {
  return (
    <a className="logo" href={SITE + '/'} aria-label="CareerVeda home">
      <span className="logo-word"><b>Career</b><i>Veda</i></span>
      <small>Learn. Analyze. Lead.</small>
    </a>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={'hdr' + (scrolled ? ' hdr-on' : '')}>
      <div className="wrap hdr-in">
        <Logo />
        <nav id="nav" className={open ? 'open' : ''} aria-label="Primary">
          {nav.map(([l, p]) => <a key={l} href={u(p)}>{l}</a>)}
          <a className="btn btn-solid nav-cta" href={u('/enroll')}>Enroll Now</a>
        </nav>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}

const Words = ({ text, start = 0, cls = '' }) => text.split(' ').map((w, i) => (
  <span className="mask" key={i}>
    <motion.span className={'word ' + cls} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: start + i * 0.07 }}>{w}&nbsp;</motion.span>
  </span>
))

function Hero() {
  const root = useRef(null), img = useRef(null), glow = useRef(null)
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to(img.current, { yPercent: -9, ease: 'none', scrollTrigger: st })
      gsap.to(glow.current, { yPercent: 30, ease: 'none', scrollTrigger: st })
    })
    return () => mm.revert()
  }, [])
  return (
    <section className="hero" ref={root}>
      <div className="glow" ref={glow} aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <motion.p className="kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>From Learning to Placement — We Guide Every Step</motion.p>
          <h1>
            <Words text="Launch Your Career with" />
            <Words text="Industry-Led Programs" start={0.35} cls="grad" />
          </h1>
          <motion.p className="lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.9 }}>
            Master Data Analytics, Product Management, Data Science and Generative AI through live classes, hands-on projects, expert mentorship, and dedicated placement support designed to help you become job-ready.
          </motion.p>
          <motion.div className="cta-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 1.05 }}>
            <a className="btn btn-solid" href="#consultation">Get in Touch</a>
            <a className="btn btn-ghost" href={u('/programs')}>Explore Programs</a>
          </motion.div>
          <p className="fine">Personalized learning, expert mentorship, interview support and 100% placement focus</p>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease, delay: 0.3 }}>
          <img ref={img} src="https://careerveda.in/images/hero-robot.webp" alt="CareerVeda AI mentor illustration" width="640" height="640" fetchpriority="high" />
        </motion.div>
      </div>
      <div className="marquee" aria-label="What CareerVeda offers">
        <ul>{[...chips, ...chips].map((c, i) => <li key={i} aria-hidden={i >= chips.length}>{c}</li>)}</ul>
      </div>
    </section>
  )
}

function Stat({ n, suffix, label }) {
  const el = useRef(null)
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const o = { v: 0 }
      el.current.textContent = '0' + suffix
      gsap.to(o, { v: n, duration: 1.8, ease: 'power2.out', scrollTrigger: { trigger: el.current, start: 'top 88%', once: true }, onUpdate: () => { el.current.textContent = fmt(o.v) + suffix } })
    })
    return () => mm.revert()
  }, [n, suffix])
  return (
    <div className="stat">
      <strong ref={el}>{fmt(n) + suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

const list = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }

function Card({ p }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px')
    e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px')
  }
  return (
    <motion.article className="card" variants={item} whileHover={{ y: -6 }} transition={{ duration: 0.3, ease }} onMouseMove={move}>
      <div className="card-img"><img src={p.img} alt="" loading="lazy" width="520" height="300" /><span className="badge">{p.tag}</span></div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p className="card-sub">{p.sub}</p>
        <p className="card-desc">{p.desc}</p>
        <dl className="meta">
          {['Duration', 'Format', 'Highlight'].map((k, i) => <div key={k}><dt>{k}</dt><dd>{p.meta[i]}</dd></div>)}
        </dl>
        <a className="card-link" href={u('/programs/' + p.slug)}>Explore Program<span className="sr"> — {p.title}</span></a>
      </div>
    </motion.article>
  )
}

function Programs() {
  return (
    <section className="sec" id="programs">
      <div className="wrap">
        <div className="head">
          <h2>Recommended Programs</h2>
          <p>Find the perfect AI-powered career path curated by industry experts</p>
        </div>
        <motion.div className="grid" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          {programs.map((p) => <Card key={p.slug} p={p} />)}
        </motion.div>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="sec sec-alt">
      <div className="wrap head head-c">
        <p className="kicker">ISO Certified Career Platform</p>
        <h2>Transform Your Career with CareerVeda</h2>
        <p>Master cutting-edge technologies with industry experts, get certified programs, and receive placement support from a professional career platform</p>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="sec" id="faq">
      <div className="wrap faq-grid">
        <div className="head">
          <h2>Got questions? We've got answers</h2>
          <p>Find everything you need to know about programs, projects, placement support, and learning experience</p>
        </div>
        <div className="faq">
          {faqs.map(([q, a], i) => {
            const on = open === i
            return (
              <div className="qa" key={q}>
                <h3><button aria-expanded={on} aria-controls={'a' + i} id={'q' + i} onClick={() => setOpen(on ? -1 : i)}>
                  {q}<span className={'plus' + (on ? ' on' : '')} aria-hidden="true" />
                </button></h3>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div id={'a' + i} role="region" aria-labelledby={'q' + i} className="ans" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }}>
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
    </section>
  )
}

function Contact() {
  return (
    <section className="sec sec-alt" id="consultation">
      <div className="wrap head head-c">
        <h2>Talk to our admissions team</h2>
        <p>Tell us your background and goals. We'll point you to the program you're eligible for and walk you through the schedule.</p>
        <div className="cta-row c">
          <a className="btn btn-solid" href={u('/contact')}>Contact Us</a>
          <a className="btn btn-ghost" href={u('/enroll')}>Enroll Now</a>
          <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Need help? Chat with us</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <Logo />
          <p className="fine">Empowering learners worldwide to achieve career excellence</p>
          <ul className="soc">{social.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noopener noreferrer" aria-label={'CareerVeda on ' + l}>{l}</a></li>)}</ul>
        </div>
        <nav aria-label="Discover more"><h4>Discover More</h4>{discover.map(([l, h]) => <a key={l} href={h}>{l}</a>)}</nav>
        <nav aria-label="Policies"><h4>Policies</h4>{policies.map(([l, h]) => <a key={l} href={h}>{l}</a>)}</nav>
        <address>
          <h4>Contact Us</h4>
          <p>CareerVeda OPC Private Limited, Awfis Majestic Signia, 1st Floor, Majestic Signia, Plot No. A-27, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309</p>
          <p><a href="tel:+919217801191">+91 9217801191</a></p>
          <p>Mon-Sat: 10:00 AM to 07:00 PM · Sunday: Closed</p>
        </address>
      </div>
      <p className="copy wrap">© 2026 CareerVeda. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const h = (e) => {
      const a = e.target.closest('a[href^="#"]'); if (!a) return
      const t = document.querySelector(a.getAttribute('href')); if (!t) return
      e.preventDefault(); t.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
      t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true })
    }
    document.addEventListener('click', h); return () => document.removeEventListener('click', h)
  }, [])
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <motion.main id="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <div className="stats wrap" role="list" aria-label="CareerVeda in numbers">{stats.map((s) => <div role="listitem" key={s.label}><Stat {...s} /></div>)}</div>
        <Programs />
        <Trust />
        <FAQ />
        <Contact />
      </motion.main>
      <Footer />
    </MotionConfig>
  )
}
