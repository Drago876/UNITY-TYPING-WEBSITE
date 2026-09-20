import { useEffect, useState } from 'react'
import './App.css'
import ServiceDetail from './components/ServiceDetail'
import { getServiceBySlug, travelServices, typingServices } from './data/services'
import { destinations } from './data/destinations'

const contactLocations = [
  { division: 'UNITY TYPING', location: 'Musaffah Shabiya 10', phone: '0501966823' },
  { division: 'UNITY TYPING BRANCH', location: 'Abu Dhabi, UAE', phone: '0567579426' },
  { division: 'UNITY TRAVELS', location: 'Musaffah Shabiya', phone: '0567579422' },
]

function getServiceSlugFromHash() {
  const match = window.location.hash.match(/^#services\/(.+)$/)
  return match ? match[1] : null
}

function App() {
  const [activeDivision, setActiveDivision] = useState('typing')
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceSlug, setServiceSlug] = useState(getServiceSlugFromHash)
  const services = activeDivision === 'typing' ? typingServices : travelServices
  const selectedService = serviceSlug ? getServiceBySlug(serviceSlug) : null

  useEffect(() => {
    const handleHashChange = () => {
      const nextSlug = getServiceSlugFromHash()
      setServiceSlug(nextSlug)
      if (!nextSlug && window.location.hash === '#services') {
        window.setTimeout(() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }), 0)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  const chooseDivision = (division) => {
    setActiveDivision(division)
    setMenuOpen(false)
    window.history.pushState(null, '', '#services')
    setServiceSlug(null)
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openService = (slug) => {
    window.history.pushState(null, '', `#services/${slug}`)
    setServiceSlug(slug)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeDetail = () => {
    window.history.pushState(null, '', '#services')
    setServiceSlug(null)
    window.setTimeout(() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  return (
    <div className="site-shell">
      <div className="utility-bar"><span>UAE SERVICES &amp; TRAVEL SUPPORT</span><span className="follow-us">Follow us <b>Unity Typing: @unity_typing</b><b>Unity Travels: @unity_travels_uae</b></span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Unity Typing & Travels home"><img className="brand-logo" src="/unity_logo.png" alt="Unity Typing & Travels logo" /><span><strong>UNITY TYPING &amp; TRAVELS</strong><small>OFFICIAL COMPANY NAME</small></span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /><b>Menu</b></button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <button type="button" onClick={() => chooseDivision('typing')}>Unity Typing</button>
          <button type="button" onClick={() => chooseDivision('travels')}>Unity Travels</button>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Contact us <span>↗</span></a>
        </nav>
      </header>

      {selectedService ? <ServiceDetail service={selectedService} onBack={closeDetail} /> : <main id="top">
        <section className="hero-section">
          <div className="hero-copy"><p className="eyebrow"><span /> UAE support, made clear</p><h1>One trusted partner.<br /><em>Two ways forward.</em></h1><p className="hero-lede">From everyday government documentation to the next destination on your map, Unity makes the important details easier to move through.</p><div className="hero-actions"><a className="button button-primary" href="#services">Explore services <span>↓</span></a><a className="text-link" href="#about">Meet Unity <span>↗</span></a></div><div className="hero-note"><span className="status-dot" /> Built around your next step</div></div>
          <div className="hero-visual" aria-label="Aerial view of a UAE coastline" role="img"><div className="visual-label visual-label-top">EST. / UAE <span>01</span></div><div className="visual-label visual-label-bottom">TYPING <span>+</span> TRAVELS</div><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /></div>
        </section>

        <section className="choice-section" id="services"><div className="section-heading"><p className="eyebrow"><span /> Start here</p><h2>What can we help<br /><em>you with today?</em></h2><p>Choose the side of Unity you need. We will help you find the right next conversation.</p></div><div className="division-grid">
          <button className={`division-card typing-card ${activeDivision === 'typing' ? 'is-active' : ''}`} type="button" onClick={() => chooseDivision('typing')}><span className="card-number">01 / UNITY TYPING</span><span className="division-icon">⌘</span><span className="division-title">Government &amp;<br />business services</span><span className="division-list">Documentation&nbsp; · &nbsp;Visa&nbsp; · &nbsp;PRO support</span><span className="card-arrow">↗</span></button>
          <button className={`division-card travel-card ${activeDivision === 'travels' ? 'is-active' : ''}`} type="button" onClick={() => chooseDivision('travels')}><span className="card-number">02 / UNITY TRAVELS</span><span className="division-icon">✈</span><span className="division-title">Travel &amp;<br />tourism services</span><span className="division-list">Flights&nbsp; · &nbsp;Hotels&nbsp; · &nbsp;Holidays</span><span className="card-arrow">↗</span></button>
        </div></section>

        <section className="services-section"><div className="section-heading section-heading-inline"><div><p className="eyebrow"><span /> {activeDivision === 'typing' ? 'Unity Typing' : 'Unity Travels'}</p><h2>Support that moves<br /><em>with you.</em></h2></div><p className="section-side-copy">Explore a starting selection of services. Select a card to review the current service detail structure.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.slug}><span className="service-icon">{service.icon}</span><h3>{service.name}</h3><p>{service.shortDescription}</p><button className="service-card-link" type="button" onClick={() => openService(service.slug)}>View service details <span>↗</span></button></article>)}</div></section>

        <section className="destination-section"><div className="section-heading section-heading-inline"><div><p className="eyebrow"><span /> A world in reach</p><h2>Where will you<br /><em>go next?</em></h2></div><a className="text-link" href="#contact">Plan a journey <span>↗</span></a></div><div className="destination-grid">{destinations.map((destination) => <article className="destination-card" key={destination.slug}><img src={destination.image} alt={`${destination.name} travel destination`} loading="lazy" /><div><span>{destination.shortDescription}</span><h3>{destination.name}</h3></div><a href="#contact" aria-label={`Ask about ${destination.name}`}>↗</a></article>)}</div></section>

        <section className="about-section" id="about"><div className="about-number">U<span>/</span>01</div><div><p className="eyebrow"><span /> About Unity</p><h2>Clarity for the<br /><em>journey ahead.</em></h2></div><p>Unity Typing &amp; Travels brings government, documentation, business support and travel enquiries together under one approachable UAE-focused brand. The details matter. So does the way you move through them.</p></section>
        <section className="contact-section" id="contact"><div><p className="eyebrow"><span /> Your next move</p><h2>Have a question?<br /><em>Let’s talk.</em></h2><p className="contact-intro">Connect with the Unity team at the location that suits your enquiry.</p></div><div className="contact-panel"><div className="contact-list">{contactLocations.map((contact) => <div className="contact-location" key={contact.division}><span>{contact.division}</span><p>{contact.location}</p><a href={`tel:${contact.phone}`}>{contact.phone}</a></div>)}</div><small>No email, opening hours, WhatsApp link or map details have been supplied yet.</small></div></section>
      </main>}
      <footer className="site-footer"><a className="brand" href="#top"><img className="brand-logo" src="/unity_logo.png" alt="Unity Typing & Travels logo" /><span><strong>UNITY TYPING &amp; TRAVELS</strong><small>OFFICIAL COMPANY NAME</small></span></a><p>Government services &amp; travel support, together.</p><span>© 2026 Unity Typing &amp; Travels</span></footer>
    </div>
  )
}

export default App
