import { useState } from 'react'
import { CONTENT_PENDING } from '../data/services'

function EnquiryForm({ service, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return <div className="enquiry-success"><strong>Request noted.</strong><p>This prototype does not submit to a database yet. Unity can connect this form in the next stage.</p><button className="text-link" type="button" onClick={onClose}>Close request form <span>×</span></button></div>
  }

  return <form className="enquiry-form" onSubmit={handleSubmit}>
    <div className="form-heading"><p className="eyebrow"><span /> Request this service</p><button type="button" aria-label="Close request form" onClick={onClose}>×</button></div>
    <p className="form-service">{service.name}</p>
    <label>Full name<input name="name" required placeholder="Your name" /></label>
    <label>Phone<input name="phone" required type="tel" placeholder="Your phone number" /></label>
    <label>Email <span className="optional">optional</span><input name="email" type="email" placeholder="Your email" /></label>
    <label>Message<textarea name="message" rows="4" placeholder="Tell us what you need" /></label>
    <label>Preferred contact method<select name="contactMethod" defaultValue="phone"><option value="phone">Phone</option><option value="email">Email</option></select></label>
    <button className="button button-primary" type="submit">Submit request <span>↗</span></button>
  </form>
}

export default function ServiceDetail({ service, onBack }) {
  const [formOpen, setFormOpen] = useState(false)

  return <main className="detail-page" id="top">
    <section className="detail-hero"><button className="back-link" type="button" onClick={onBack}>← Back to services</button><p className="eyebrow"><span /> {service.category}</p><div className="detail-title-row"><span className="detail-icon">{service.icon}</span><h1>{service.name}</h1></div><p className="detail-lede">{service.fullDescription || CONTENT_PENDING}</p><button className="button button-primary" type="button" onClick={() => setFormOpen(true)}>Request This Service <span>↗</span></button></section>
    <section className="detail-grid"><article className="detail-content"><p className="eyebrow"><span /> Service overview</p><h2>Start with a<br /><em>conversation.</em></h2><p>{service.shortDescription}</p><p className="detail-placeholder">{service.status === 'placeholder' ? CONTENT_PENDING : service.fullDescription}</p></article><aside className="detail-facts"><div><span>STATUS</span><p>{service.placeholder ? 'Placeholder content' : service.status}</p></div><div><span>WHO IT IS FOR</span><p>{service.whoItsFor}</p></div><div><span>REQUIRED DOCUMENTS</span><ul>{service.requiredDocuments.map((item) => <li key={item}>{item}</li>)}</ul></div><div><span>REQUIREMENTS</span><ul>{service.requirements.map((item) => <li key={item}>{item}</li>)}</ul></div><div><span>PROCESS</span><ol>{service.processSteps.map((item) => <li key={item}>{item}</li>)}</ol></div><div><span>PROCESSING INFORMATION</span><p>{service.processingInformation}</p></div><div><span>FEES</span><p>{service.fees}</p></div><div><span>IMPORTANT NOTES</span><ul>{service.notes.map((item) => <li key={item}>{item}</li>)}</ul></div></aside></section>
    <section className="detail-faq"><p className="eyebrow"><span /> Frequently asked</p>{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
    {formOpen && <div className="enquiry-overlay" role="dialog" aria-modal="true" aria-label={`Request ${service.name}`}><EnquiryForm service={service} onClose={() => setFormOpen(false)} /></div>}
  </main>
}
